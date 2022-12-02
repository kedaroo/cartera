import express from 'express'
import { getAllTransactions, addTransaction } from '../controllers/transactionController'

const router = express.Router()

router.route('/getAllTransactions').get(getAllTransactions)
router.route('/transaction').post(addTransaction)

export default router
