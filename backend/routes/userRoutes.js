import express from 'express'
import { loginUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', loginUser)
router.route('/profile').get(protectRoute, getUserProfile).put(protectRoute, updateUserProfile)

export default router