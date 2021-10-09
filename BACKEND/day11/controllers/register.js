const User = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({where: {email}});
        if(alreadyExists) {
            res.status(201).send("Email already exists");
        }
        bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = brcrypt.hashSync(password, salt);

        const newUser = new User(
            {
                email: email.toLowerCase(),
                password: hash
            }
        );
        const saveUser = await newUser.save();
        res.status(201).send("User registered succesfully");
    } catch(err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports = register;