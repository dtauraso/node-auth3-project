
const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/secrets.js')

// comes from client
module.exports = (req, res, next) => {
  const token = req.headers.authorization
  // will fail if the secret is changed
  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        // the token is not valid
        res.status(401).json({message: 'you are a teapot. this can\'t be used'})
      } else {
        next()
      }
    })

  } else {
    res.status(401).json({message: 'you shall not pass!'})
  }
}