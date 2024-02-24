import express from 'express'
import { authUser } from '../controllers/userController.js'
const router = express.Router()

router.post('/auth', authUser)

//app.get('/', (req,res) => res.send('Server is ready'))

export default router
