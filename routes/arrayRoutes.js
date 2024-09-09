import authorize from "../middleware/jwt_authorize.js"
import db from "../db.js"
import express from "express"
const router = express.Router();

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
        console.error("Please fill in all fields");
        return res.status(400).send("Please fill in all fields");
    }

    try {
        const [newFlashcardId] = await db('array_methods').insert({
            name,
            definition,
            code,
            user_id: req.decoded.userId
        }).returning('id'); //returns the inserted ID--without this, the response would be empty

        const createdFlashcard = {
            id: newFlashcardId,
            name,
            definition,
            code,
            user_id: req.decoded.userId
        };

        res.json(createdFlashcard); //returns the full flashcard--without this, the response would be empty and the client would not have the ID. This was preventing me from deleting a new ENTRY immediately after it was created (without have to refresh to the browser to produce the ID)
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).send("Error adding flashcard");
    }
});


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
        console.log(error);
        res.status(500).send("Error deleting card");
    }
})
export default router;