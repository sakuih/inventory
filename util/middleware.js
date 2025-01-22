const jwt = require('jsonwebtoken')



function authenticateJWT (req, res, next) {
  //const token = req.headers['authorization']?.split(' ')[1]
  const authHeader = req.headers['authorization']

  if (!authHeader)
    return res.status(403).json({message: 'Token is missing'})

  const token = authHeader.split(' ')[1]

  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err)
      return res.status(403).json({message: `Invalid token ${err.message}`})

    req.user = user
    next()
  })
  
}


module.exports = authenticateJWT



