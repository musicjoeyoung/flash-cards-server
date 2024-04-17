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

app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/array-methods", arrayRoutes)
app.use("/object-methods", objectRoutes)
app.use("/algos-methods", algosRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})