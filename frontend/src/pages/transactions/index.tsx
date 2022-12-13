import { useTransactionsContext } from "../../hooks/useTransactionsContext";

export default function Transactions() {
  const {transactions} = useTransactionsContext()
  return <div>Transactions Screen</div>;
}
