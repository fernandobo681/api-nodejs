const jwt = require('jsonwebtoken');
require('dotenv').config();

async function itsAuth(req, res, next) {
    const accessToken = req.headers['authorization'];
    if (accessToken) {
        const token = accessToken.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, customer) => {
            if(err){
                res.status(401).send('Access denied, token expired or incorrect')
            } else {
                next();
            }
          
        });
    } else {
        res.status(401).send('Access denied, you need a token.');
    }
}


module.exports = itsAuth;


