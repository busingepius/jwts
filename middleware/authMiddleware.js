const jwt = require("jsonwebtoken");
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new Error();
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,"JWT_SECRET");
        const {name,id} = decoded;
        console.log(decoded)
        req.user = {name,id};
    }catch(error){
        console.log(error);
        throw new Error("");
    }
    next();
}

module.exports = authMiddleware;