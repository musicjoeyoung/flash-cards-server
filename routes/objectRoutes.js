import express from "express"
const router = express.Router();
import db from "../db.js"
import authorize from "../middleware/jwt_authorize.js"

router.get("/nologin", async (req, res) => {
    try {
        const results = await db.select('*').from('object_methods').where({ 'user_id': null })
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
});

router.get("/", authorize, async (req, res) => {
    try {
        const results = await db.select('*').from('object_methods').where({ 'user_id': req.decoded.userId }).orWhere({ 'user_id': null });
        console.log("Decoded id (objectRoutes.js)", req.decoded.userId)
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
        const results = await db('object_methods').insert({
            name,
            definition,
            code,
            user_id: req.decoded.userId
        });
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }

}
)

export default router;