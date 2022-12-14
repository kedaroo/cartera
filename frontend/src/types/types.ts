export enum AmountType {
  income = 'income',
  expense = 'expense',
}

export enum TransactionCategories {
  food = 'food',
  petrol = 'petrol',
  salary = 'salary',
  investment = 'investment'
}

export interface Transaction {
  id: number
  name: string
  amount: number
  category: TransactionCategories
  type: AmountType
  timestamp: string
}