const User = require('../models/User')
const usersRouter = require('express').Router()
const bcrypt = require('bcryptjs')




usersRouter.post('/register', async (req, res) => {
  const { email, username, password} = req.body

  const checkForUser = await User.findOne({ username })

  if (checkForUser)
    return res.status(400).json({ message : 'Username already exists'})

  const saltrounds = 10
  const passwordHash = await bcrypt.hash(password, saltrounds)
  
  const user = new User({
    email,
    username,
    password,
  })

  const savedUser = await user.save({})

  res.status(201).json(savedUser)
})

// TODO get all users and their items


module.exports = usersRouter
