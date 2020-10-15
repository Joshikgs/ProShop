import express from 'express'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protectRoute, addOrderItems)
router.route('/:id').get(protectRoute, getOrderById)
router.route('/:id/pay').put(protectRoute, updateOrderToPaid)

export default router