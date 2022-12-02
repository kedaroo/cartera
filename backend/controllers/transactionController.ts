import { Request, Response } from 'express'
import { connection } from '../config/database'
import { GET_ALL_TRANSACTIONS, INSERT_TRANSACTION } from '../services/transactionServices'
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

interface Transaction {
  name: string
  amount: number
  category: string
  timestamp?: string
}

export const addTransaction = (req: Request, res: Response): Response | undefined => {
  const { name, amount, category, timestamp }: Transaction = req.body

  if (name === undefined || amount === undefined || category === undefined || timestamp === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Send transaction name, amount, category & timestamp'
    })
  }

  try {
    connection.query(
      INSERT_TRANSACTION, [name, amount, category, timestamp],
      (err, results) => {
        if (err !== null) {
          return internalServerError(res)
        }
        return res.status(200).json({
          success: true,
          message: 'Transactions added successfully.'
        })
      }
    )
  } catch (err) {
    return internalServerError(res)
  }
}
