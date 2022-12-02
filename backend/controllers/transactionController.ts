import { Request, Response } from 'express'
import { connection } from '../config/database'
import { GET_ALL_TRANSACTIONS } from '../services/transactionServices'
import { internalServerError } from '../utils/internalServerError'

export const getAllTransactions = (req: Request, res: Response): Response | undefined => {
  try {
    connection.query(
      GET_ALL_TRANSACTIONS,
      (err, results) => {
        if (err !== null) {
          return internalServerError(res)
        }
        return res.status(200).json({
          success: true,
          message: 'Transactions fetched successfully.',
          transactions: results
        })
      }
    )
  } catch (err) {
    return internalServerError(res)
  }
}
