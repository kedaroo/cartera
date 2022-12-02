import { dropTransactionsTableSQL, createTransactionsTableSQL } from './sql'
import * as dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

const seedSchema = async (): Promise<void> => {
  if (DATABASE_URL !== undefined) {
    const connection = await mysql.createConnection(DATABASE_URL)
    console.log('Connection to db successful!')

    try {
      await connection.query(dropTransactionsTableSQL)
      console.log('***dropped transactions table***')

      await connection.query(createTransactionsTableSQL)
      console.log('***created transactions table***')
    } catch (err) {
      console.log(err)
    }
  }
}

seedSchema()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    throw err
  })
