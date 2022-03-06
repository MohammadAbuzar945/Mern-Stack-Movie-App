const jwt = require("jsonwebtoken");


function verify(req, res, next) {
    const authheader = req.headers.token;
    if (authheader) {
        const token = authheader.split("")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(401).json("Token is not valid");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You are not Authenticated");
    }
}

module.exports = verify;
