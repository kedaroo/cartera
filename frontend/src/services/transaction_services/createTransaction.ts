import { API_URL } from "../../helpers/constants"

interface PostData {
  name: string
  amount: number
  category: string
  type: string
  timestamp: string
}

export async function createTransaction(transaction: PostData): Promise<JSON> {
  const res = await fetch(`${API_URL}/api/v1/transaction`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(transaction)
  })
  const json = await res.json()
  return json
}
