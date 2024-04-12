import express from "express"
const app = express()
const PORT = process.env.PORT || 8081
import "dotenv/config"
import loginRoutes from "./routes/loginRoutes.js"
import registerRoutes from "./routes/registerRoutes.js"
import arrayRoutes from "./routes/arrayRoutes.js"
import objectRoutes from "./routes/objectRoutes.js"
import algosRoutes from "./routes/algosRoutes.js"
import cors from "cors"
import serverResponse from "./serverResponse.js"

app.get("/", (req, res) => {
    const htmlResponse = serverResponse;
    res.send(htmlResponse);
});

app.use(express.json())
app.use(cors())

/* -------------------------------------------------------------------------- */
/*         Function to extact the token from the Authorization header         */
/* -------------------------------------------------------------------------- */
/* function getToken(req) {
    if (!req.headers.authorization) {
        return;
    } else {
        return req.headers.authorization.split(" ")[1];
    }
} */

/* -------------------------------------------------------------------------- */
/*            Middleware to check for valid JWT on protected routes           */
/* -------------------------------------------------------------------------- */

/* app.use((req, res, next) => {
    if (req.url === '/login' || req.url === '/register') {
        next()
    } else {
        const token = getToken(req);

        if (token) {
            console.log("Auth Token:", token);
            if (jwt.verify(token, process.env.JWT_SECRET)) {
                req.decode = jwt.decode(token)
                next();
            } else {
                res.status(403).json({ error: "Not Authorized" })

            }
        } else {
            res.status(403).json({ error: "No token. Not Authorized" })

        }
    }
}) */


app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/array-methods", arrayRoutes)
app.use("/object-methods", objectRoutes)
app.use("/algos-methods", algosRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})