import express from "express"
const router = express.Router();
import db from "../db.js"
import authorize from "../middleware/jwt_authorize.js"

router.get("/", async (req, res) => {
    try {
        const results = await db.select('*').from('users');
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
});

router.get("/profile", authorize, async (req, res) => {

    try {
        const results = await db.select('*').from('users').where({ 'id': req.decoded.userId }).first(); //first() returns the first element of the array, so that in the client-side, I don't have to access the data (via axios) as response.data[0], but instead just response.data
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
}
)

export default router