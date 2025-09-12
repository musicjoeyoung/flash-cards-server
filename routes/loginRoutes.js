import bcrypt from "bcryptjs"
import db from "../db.js"
import express from "express"
import jwt from "jsonwebtoken"
const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    try {
        const results = await db.select('*').from('users').where({ email });

        if (!results.length) {
            return res.status(403).json({ error: "Invalid email" });
        }

        const user = results[0];
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(403).json({ error: "Invalid password" });
        }

        const accessToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;