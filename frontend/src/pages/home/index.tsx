import { useEffect, useState } from "react";
import TopGreeting from "../../components/pages/TopGreeting";
import BalanceCard from "../../components/pages/balance_card";
import TransactionList from "../../components/pages/transaction_list";
import { calculateBalance } from "../../utils/home/calculateBalance";
import { calculateMonthlyTransactionsAmount } from "../../utils/home/calculateMonthlyExpense";
import { AmountType } from "../../types/types";
import FormModal from "./FormModal";
import LoadingCard from "../../components/pages/balance_card/LoadingCard";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

export default function Home() {
  const [balance, setBalance] = useState<number>();
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { transactions } = useTransactionsContext();

  useEffect(() => {
    async function fetchTransactions() {
      const bal = calculateBalance(transactions);
      setIncome(calculateMonthlyTransactionsAmount(transactions, AmountType.income));
      setExpense(calculateMonthlyTransactionsAmount(transactions, AmountType.expense));
      setBalance(bal);
    }

    fetchTransactions();
  }, [showModal, transactions]);

  return (
    <div className=" bg-gray-100">
      <div className="mx-auto min-h-screen max-w-md  py-12 px-6">
        <TopGreeting toggleModal={setShowModal} />
        {balance !== undefined ? (
          <BalanceCard balance={balance} income={income} expense={expense} />
        ) : (
          <LoadingCard />
        )}
        <TransactionList transactions={transactions} />
        {showModal && <FormModal toggleModal={setShowModal} />}
      </div>
    </div>
  );
}
