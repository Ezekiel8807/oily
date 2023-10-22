import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


//DataBase model
import userData from "../model/userSchema.js";


//user  registration api
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password ) return res.status(400).json({ msg: "Invalid credentials. " });

        //check username exist
        const usernameExist = await userData.findOne({ username: username });
        if ( usernameExist ) return res.status(400).json({ msg: "Username taken!" });

        //check if user email exist
        const emailExist = await userData.findOne({ email: email });
        if ( emailExist ) return res.status(400).json({ msg: "Email taken!" });
    
        //Encrypt user password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new userData({
            username,
            email,
            password: passwordHash,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ msg: "Account created succesfully" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// user login api
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password ) return res.status(401).json({ msg: "Invalid credentials. " });

        //check if user exist with that username
        const user = await userData.findOne({ username: username });
        if (!user) return res.status(404).json({ msg: "User does not exist. " });
    
        //encrypt user password and compare 
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET);
        delete userData.password;
        res.status(200).json({ token, user });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}