import express from 'express'
import { loginUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser } from '../controllers/userController.js'
import { protectRoute, authAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser).get(protectRoute, authAdmin, getUsers)
router.post('/login', loginUser)
router.route('/profile').get(protectRoute, getUserProfile).put(protectRoute, updateUserProfile)
router.route('/:id').delete(protectRoute, authAdmin, deleteUser)

export default router