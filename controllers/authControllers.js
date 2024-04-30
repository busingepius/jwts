const jwt = require("jsonwebtoken");
function login(req, res, next) {
    const {name, password} = req.body;

    if(!name || !password){
        throw new Error();
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,name},"JWT_SECRET",{expiresIn:"30d"});
    res.status(201).json({token});
}

module.exports = login;

