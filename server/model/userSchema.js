//user dataBase Schema
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userId: String,
    username: String,
    email: String,
    password: String,
    isSeller: Boolean,
});

const users = mongoose.model('users', userSchema);
export default users;