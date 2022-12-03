import { Transaction } from "../../types/types";
import { AmountType } from "../../types/types";

function getMonth(timestamp?: string) {
  if (timestamp === undefined) {
    return new Date().getMonth()
  }
  return new Date(timestamp).getMonth()
}

export function calculateMonthlyTransactionsAmount(transactions: Array<Transaction>, type: AmountType) {
  return transactions.reduce((prev, curr) => {
    if (getMonth() === getMonth(curr.timestamp) && curr.type === type) {
      return prev + curr.amount
    }
    return 0
  }, 0);
}