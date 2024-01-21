const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model");

const loginHandler = async (req, res) => {
    try {
        // Find user by mobile number
        const user = await User.findOne({ number: req.body.number });

        // Check if user exists
        if (!user) {
            console.log(user);
            return res.status(401).json({ message: "Invalid Mobile Number" });
        }

        // Check if user has a password (added this check)
        if (!user.password) {
            return res.status(401).json({ message: "User does not have a password" });
        }

        // Decrypt the stored password using CryptoJS
        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);

        // Compare the decrypted password with the provided password
        if (decryptedPassword !== req.body.password) {
            return res.status(401).json({ message: "Incorrect Password" });

        }
        const { password,...rest} = user._doc;     //make sure passwoed result ma show na kare
        const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN )                       //jwt.sign two parameter leta hai one is payload and secind is access token secret key
        res.json({...rest, accessToken});
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = loginHandler;