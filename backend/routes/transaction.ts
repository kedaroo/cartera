import express from 'express'
import { getAllTransactions } from '../controllers/transactionController'

const router = express.Router()

router.route('/getAllTransactions').get(getAllTransactions)

export default router
