import { Response } from 'express'

export const internalServerError = (res: Response): Response => {
  return res.status(500).json({
    success: false,
    message: 'Internal server error. Please try again!'
  })
}
