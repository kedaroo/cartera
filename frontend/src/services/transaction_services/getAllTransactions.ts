import { API_URL } from "../../helpers/constants"
import { Transaction } from "../../types/types"

export async function getAllTransactions(): Promise<Array<Transaction>> {
  const res = await fetch(`${API_URL}/api/v1/getAlltransactions`)
  const json = await res.json()
  return json.transactions
}