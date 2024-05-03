import express from "express"
const router = express.Router();
import db from "../db.js"
import authorize from "../middleware/jwt_authorize.js"

//refactor this later. "/nologin" seems kind of ridiculous. Do I need a separate GET for when someone is not logged in??
//Add some Boolean logic inside of the authorization and then combine the two GETs into one. If they are logged in, give them the user_id data. If they are not logged in, give them the data with the user_id of null.
/* router.get("/nologin", async (req, res) => {
    try {
        const results = await db.select('*').from('array_methods').where({ 'user_id': null })
        res.json(results)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error fetching data");
    }
}); */

router.get("/", authorize, async (req, res) => {
    try {
        const query = db.select('*').from('array_methods');
        if (req.isAuthorized) {
            query.where({ 'user_id': req.decoded.userId }).orWhere({ 'user_id': null });
            //console.log("Decoded id (arrayRoutes.js)", req.decoded.userId);
        } else {
            query.where({ 'user_id': null });
        }

        const results = await query;
        res.json(results);
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

router.delete("/:id", authorize, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db('array_methods').where({ id, 'user_id': req.decoded.userId }).del();
        if (result) {
            res.status(200).json({ message: 'Entry deleted successfully.' })
        } else {
            res.status(404).json({ message: 'Entry not found. Delete request failed.' })
        }

    } catch (error) {
        console.log(error)
    }
})
export default router;