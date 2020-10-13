import express from 'express'
import { loginUser, getUserProfile } from '../controllers/userController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', loginUser)
router.route('/profile').get(protectRoute, getUserProfile)

export default router