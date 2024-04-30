const jwt = require("jsonwebtoken");
function authMiddleware(req,res,next){
    const auth = req.headers.authorization;
    if(!auth || !auth.startsWith("Bearer ")){
        throw new Error();
    }

    const token = auth.split(" ")[1];

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