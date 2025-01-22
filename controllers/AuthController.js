const User = require("../models/User")
const { createSecretToken } = require("../util/SecretToken")
const authRouter = require('express').Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
require('dotenv').config()




authRouter.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user) {
    return res.status(401).json({message: "User not found"})
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json({message: "Invalid username or password"})
  }

  const token = jwt.sign({ username: user.username}, process.env.TOKEN_KEY, {expiresIn: '1h'})
  res.json({ token })
   
})


/*
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.json({ message: "User already exists" })
    }
    const user = await User.create({ email, password, username, createdAt })
    const token = createSecretToken(user._id)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    })
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user })
    next()
  } catch (error) {
    console.error(error)
  }
}

*/

module.exports = authRouter

