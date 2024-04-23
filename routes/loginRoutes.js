import express from "express"
const router = express.Router();
import db from "../db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.error("Please fill in all fields")
        res.status(400).send("Please fill in all fields");
    }

    try {
        const results = await db.select('*').from('users').where({ email });
        if (results.length > 0) {
            const user = results[0];
            if (await bcrypt.compare(password, user.password)) {
                const accessToken = jwt.sign(
                    { userId: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' });
                res.json({ accessToken });
            } else {
                res.status(403).send("Invalid password");
            }
        } else {
            res.status(403).send("Invalid email");
        }
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
}
)


export default router;