// tranactions table
export const dropTransactionsTableSQL = 'DROP TABLE IF EXISTS transactions;'

export const createTransactionsTableSQL = `CREATE TABLE transactions (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    amount FLOAT NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );`
