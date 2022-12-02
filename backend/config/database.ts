// require("dotenv").config();
import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

export let connection: mysql.Connection

if (DATABASE_URL !== undefined) {
  connection = mysql.createConnection(DATABASE_URL)
  connection.connect()
}

console.log('connected with db successfully')
