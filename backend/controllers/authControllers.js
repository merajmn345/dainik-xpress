const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
    login = async (req, res) => {
        const { email, password } = req.body;

        if (!email) {
            return res.status(404).json({ message: "Please provide your email" });
        }
        if (!password) {
            return res.status(404).json({ message: "Please provide your password" });
        }

        // console.log(email, "", password);

        console.log("auth Model name");
        // console.log(await authModel.find());

        try {
            const user = await authModel.findOne({ email }).select("+password");
            console.log(user);
            // if (user) {
            //     const match = await bcrypt.compare(password, user.password);
            //     if (match) {
            //         const payload = {
            //             id: user.id,
            //             name: user.name,
            //             category: user.category,
            //             role: user.role,
            //         };
            //         // Generate token
            //         const token = await jwt.sign(payload, process.env.secret, {
            //             expiresIn: process.env.exp_time,
            //         });
            //         console.log("token", token);
            //         return res.status(200).json({ message: "Login Successfully" });
            //     } else {
            //         return res.status(404).json({ message: "Invalid password" });
            //     }
            // } else {
            //     return res.status(404).json({ message: "User not found" });
            // }
        } catch (error) {
            console.log(error);
        }

        try {
            // Find user + include password
            const user = await authModel.findOne({ email: email.toLowerCase().trim() }).select("+password");
            console.log(user);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Compare password
            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(401).json({ message: "Invalid password" });
            }

            // Create payload
            const payload = {
                id: user._id,
                name: user.name,
                category: user.category,
                role: user.role,
            };

            // Generate token
            const token = jwt.sign(payload, process.env.secret, {
                expiresIn: process.env.exp_time,
            });

            return res.status(200).json({
                message: "Login Successful",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    category: user.category,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server Error" });
        }
    };
}

module.exports = new authController();
