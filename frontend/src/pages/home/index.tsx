import { useEffect, useState } from "react";
import TopGreeting from "../../components/pages/TopGreeting";
import BalanceCard from "../../components/pages/balance_card";
import TransactionList from "../../components/pages/transaction_list";
import { getAllTransactions } from "../../services/transaction_services/getAllTransactions";
import { Transaction } from "../../types/types";
import { calculateBalance } from "../../utils/home/calculateBalance";
import { calculateMonthlyTransactionsAmount } from "../../utils/home/calculateMonthlyExpense";
import { AmountType } from "../../types/types";

export default function Home() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  const [balance, setBalance] = useState<number>();
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await getAllTransactions();
      const bal = calculateBalance(res);
      setIncome(calculateMonthlyTransactionsAmount(res, AmountType.income));
      setExpense(calculateMonthlyTransactionsAmount(res, AmountType.expense));
      setBalance(bal);
      setTransactions(res);
    }

    fetchTransactions();
  }, []);
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto min-h-screen max-w-md  py-12 px-6">
        <TopGreeting />
        {balance ? (
          <BalanceCard balance={balance} income={income} expense={expense} />
        ) : (
          "Loading..."
        )}
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
