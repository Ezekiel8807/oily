//user dataBase Schema
import mongoose from 'mongoose'


const adminSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "sub"
    },
    password: String,
});

const admins = mongoose.model('admins', adminSchema);
export default admins;