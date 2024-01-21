const CryptoJS = require('crypto-js');

const User = require("../model/user.model");

const singupHandler = async (req,res) => {
    try{
        const userObject = {
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password :  CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        }
        const newUser = new User(userObject);         // here we created new user 
        const savedUser = await newUser.save();       // here we saved things in the database
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json({ messege :"Error creating a user"})
    }
}


module.exports = singupHandler;