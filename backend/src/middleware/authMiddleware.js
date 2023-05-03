const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
    try {

        const token = req.header("authorization").split(" ")[1];
        const decryptedToken = jwt.verify(token, JWT_SECRET);
        req.body.userId = decryptedToken.userId;

        next();
        
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        })
    }
    
};

module.exports = authMiddleware;
 