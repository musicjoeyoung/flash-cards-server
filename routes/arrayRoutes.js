import express from "express"
const router = express.Router();
import db from "../db.js"
import authorize from "../middleware/jwt_authorize.js"

router.get("/", async (req, res) => {
    try {
        const results = await db.select('*').from('array_methods');
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
});

router.post("/", authorize, async (req, res) => {
    const { name, definition, code } = req.body;

    if (!name || !definition || !code) {
        console.error("Please fill in all fields")
        res.status(400).send("Please fill in all fields");
    }

    try {
        const results = await db('array_methods').insert({
            name,
            definition,
            code
        });
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }

}
)

export default router;