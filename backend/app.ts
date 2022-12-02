import express from 'express'
import cors from 'cors'
import transactionRouter from './routes/transaction'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/', transactionRouter)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello world!' })
})
