
//DataBase model
import userData from "../model/userSchema.js";


export const singleUser = async (req, res) => {
    try{
        const { username } = req.params;

        //check if user exist with that username
        const user = await userData.findOne({ username: username });
        res.status(200).json(user);

    }catch(err){
        res.status(404).json({ msg: "Invalid credentials. " });
    }
}

export const allUser = async (req, res) => {
    try{

        //check if user exist with that username
        const user = await userData.find();
        res.status(200).json(user);

    }catch(err){
        res.status(404).json({ msg: "Invalid credentials. " });
    }
}