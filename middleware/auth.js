const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send("Access denied");

    jwt.verify(token, )
}