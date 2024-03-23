import express from "express"
const app = express()
const PORT = process.env.PORT || 8081
import "dotenv/config"
import arrayRoutes from "./routes/arrayRoutes.js"
import objectRoutes from "./routes/objectRoutes.js"


/* app.get("/", (req, res) => {
    res.send("Hello World!")
}) */

app.use("/array-methods", arrayRoutes)
app.use("/object-methods", objectRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})