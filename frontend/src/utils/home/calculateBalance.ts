import { Transaction } from "../../types/types";
import { AmountType } from "../../types/types";

export function calculateBalance(transactions: Array<Transaction>) {
  return transactions.reduce((prev, curr) => {
    if (curr.type === AmountType.income) {
      return prev + curr.amount
    } else {
      return prev - curr.amount
    }

  }, 0);
}