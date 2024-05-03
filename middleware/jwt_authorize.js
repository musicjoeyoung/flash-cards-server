import jwt from "jsonwebtoken";

const authorize = (req, res, next) => {
    req.isAuthorized = false; //starts as false

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next();  // if the auth header is missing, pass control the next middleware below. keep going without setting isAuthorized to true
    }

    /*    const parts = authHeader.split(" ");
       if (parts.length !== 2 || parts[0] !== "Bearer") {
           return next();  // Proceed with caution; token is not properly formatted
       }
   
       const token = parts[1]; */
    //take time to understand the above portion of "token splitting safety" and why it is or isn't necessary


    const token = req.headers.authorization.split(" ")[1] //splitting ther header and taking the token (second part === [1])
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send("Unauthorized")
            return next();  // keep going, but note that token verification failed
        }

        req.isAuthorized = true;
        req.decoded = decoded;
        console.log("Decoded: ", decoded);
        next();
    });
};

export default authorize;