import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async(req,res) => {

    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please provide all fields"
        });
    }

    const existingUser = await User.findOne({email})

    if (existingUser){
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return res.status(201).json({
        message: "Registered user successfully",
        user: {
            id: user._id,
            name: user.name,
            email:user.email
        }
    });
};


export const loginUser = async (req, res) => {

    const { email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide all fields"
        });
    }

    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "Invalid Email or Password"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({
            message: "Invalid Email or Password"
        });
    }

    return res.status(200).json({
        message: "Login Successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
};

