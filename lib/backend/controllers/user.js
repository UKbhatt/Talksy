// this gives main functionality and functions will be here
const User = require('../models/userSchema')

async function SignUp(req, res) {

    const { name, email, password } = req.body;
    await User.create(name, email, password);
    console.log("new user Created");
}

module.exports = {SignUp} ; 