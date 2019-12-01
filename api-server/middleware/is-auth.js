const jwt = require('jsonwebtoken');
const { secret_key } = require('../config');

module.exports = (req, res, next) => {
     try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secret_key);
        req.uid = decoded._id;
        next();
     }catch(error){
         return res.status(401).json({
            status: 404,
            messsage: 'Auth failed.'
         });
     };
}