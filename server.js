import express from "express"
import "dotenv/config"
import loginRoutes from "./routes/loginRoutes.js"
import registerRoutes from "./routes/registerRoutes.js"
import arrayRoutes from "./routes/arrayRoutes.js"
import objectRoutes from "./routes/objectRoutes.js"
import algosRoutes from "./routes/algosRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import passport from "./config/passport.js"
import cors from "cors"
import serverResponse from "./serverResponse.js"

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.use(passport.initialize())

app.get("/", (req, res) => {
    const htmlResponse = serverResponse;
    res.send(htmlResponse);
});

app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/users", userRoutes)
app.use("/auth", authRoutes)
app.use("/array-methods", arrayRoutes)
app.use("/object-methods", objectRoutes)
app.use("/algos-methods", algosRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

const server = app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
}).on('error', (err) => {
    if (err.code === 'EACCES') {
        console.error(`Port ${PORT} requires elevated privileges`);
    } else if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
    } else {
        console.error(err);
    }
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server terminated');
    });
});