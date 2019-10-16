const jwt = require('jsonwebtoken')
const jwtConfig = require('../secrets')

module.exports = {
  validateLogin
}

function validateLogin(req, res, next){
  const token = req.headers.authorization;

  if (token){
    // check the token is valid
    jwt.verify(token, jwtConfig.jwtSecret, (err, decodedToken) => {
      
      if(err){
        // foul play
        res.status(401).json({message: "YOU SHALL NOT PASS!"})
      } else {
        // Token is gooooooooooood
        next();
      }

    })
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}