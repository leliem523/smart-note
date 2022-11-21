const jwt = require("jsonwebtoken");

const authMiddleware = {
    accessTokenAuthenticated: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.PRIVATE_ACCESS_KEY, (err, user) => {
                if(err) {
                    return res.status(403).json("Token is not valid!");
                }
                req.user = user;
                next();
            })
        } else {
            return res.status(401).json("You're not authenticated!!");
        }
      
    }
}

module.exports = authMiddleware;