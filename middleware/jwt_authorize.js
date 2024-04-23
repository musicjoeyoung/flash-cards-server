import jwt from "jsonwebtoken"

const authorize = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Auth token required")
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid token")
        }
        req.decoded = decoded;
        console.log("Decoded: ", decoded)
        next();
    })
}

export default authorize;