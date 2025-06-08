const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // whatever fields you wnt from user

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

const User = mongoose.model('user', userSchema);
module.exports = { User   } ; 