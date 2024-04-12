import express from "express"
const router = express.Router();
import db from "../db.js"
import bcrypt from "bcrypt"

router.post('/', async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!email || !username || !password) {
        console.error("Please fill in all fields")
        res.status(400).send("Please fill in all fields");
    }

    try {
        const results = await db('users').insert({
            email,
            username,
            password: hashedPassword
        });
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            console.error('Email already exists in the database');
            res.status(400).send('Email already exists');
        } else {
            console.error('Database query failed:', error);
            res.status(500).send('Error fetching data');
        }
    }

}
)

export default router;