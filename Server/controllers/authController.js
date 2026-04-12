const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

const register = async (req, res) => {
    try {
        //FOR DB KUKUWA
        const { name, email, password } = req.body;

         if (!name || !email || !password){
            return res.status(400).json({ message: "All Field are requirde!"});
        }

        //FOR EMAIL
        const existingUser = await User.findOne({ email });

        if (existingUser){
            return res.status(400).json({ message: "Email already in use"})
        }

        //FOR PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //SAVE A USER TO MONGOL DB
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Account created successfully",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        console.error("Register error: ", error);
        res.status(500).json({ message: "Server eeror "});
    }
};

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        
        if (!email || !password){
            return res.status(400).json({ 
                message: "All field ar required" 
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ 
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        res.status(200).json({
            message: "Login successfully",
            token: generateToken(user._id),
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("Login Error: ", error);
        res.status(500).json({ message: "Server error"});
    }
};

module.exports = { register, login };