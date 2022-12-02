import express from 'express'
import { getAllTransactions, addTransaction, deleteTransaction } from '../controllers/transactionController'

const router = express.Router()

router.route('/getAllTransactions').get(getAllTransactions)
router.route('/transaction').post(addTransaction).delete(deleteTransaction)

export default router
