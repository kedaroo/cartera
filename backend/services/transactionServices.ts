export const GET_ALL_TRANSACTIONS = 'SELECT * FROM transactions;'

export const INSERT_TRANSACTION = `INSERT INTO transactions 
  (name, amount, category, timestamp) 
  VALUES (?, ?, ?, ?);`

export const DELETE_TRANSACTION = 'DELETE FROM transactions WHERE id = ?;'
