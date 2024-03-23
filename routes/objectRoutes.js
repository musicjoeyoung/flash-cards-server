import express from "express"
const router = express.Router();
import db from "../db.js"

router.get("/", async (req, res) => {
    try {
        const results = await db.select('*').from('object_methods');
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
});

export default router;