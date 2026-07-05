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

