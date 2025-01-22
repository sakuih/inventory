const express = require('express')
const morgan = require('morgan')
const authenticateJWT = require('./util/middleware')
require('dotenv').config()

const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000
const app = express()
//const authRoute = require('./routes/authRoute.js')
const cors = require('cors')
const userRouter = require("./controllers/userController")
const authRouter = require("./controllers/AuthController")
const itemRouter = require("./controllers/itemController")


//app.use('/api/users', userRoutes)
//app.use(express.static(path.join(__dirname, 'dist')))
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/items', authenticateJWT, itemRouter)



//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 


