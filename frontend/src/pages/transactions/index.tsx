import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import Header from "../../components/transactions/Header";
import BarChart from "../../components/transactions/BarChart";

export default function Transactions() {
  const {transactions} = useTransactionsContext()
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto min-h-screen max-w-md  py-12 px-6">
        <Header />
        <BarChart />
        {/* {balance !== undefined ? (
          <BalanceCard balance={balance} income={income} expense={expense} />
        ) : (
          <LoadingCard />
        )}
        <TransactionList transactions={transactions} />
        {showModal && <FormModal toggleModal={setShowModal} />} */}
      </div>
    </div>
  );
}
