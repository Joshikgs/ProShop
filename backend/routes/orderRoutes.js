import express from 'express'
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } from '../controllers/orderController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protectRoute, addOrderItems)
router.route('/myorders').get(protectRoute, getMyOrders)
router.route('/:id').get(protectRoute, getOrderById)
router.route('/:id/pay').put(protectRoute, updateOrderToPaid)

export default router