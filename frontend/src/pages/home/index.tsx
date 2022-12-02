import TopGreeting from "../../components/pages/TopGreeting";
import BalanceCard from "../../components/pages/balance_card";
import TransactionList from "../../components/pages/transaction_list";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto min-h-screen max-w-md py-12 px-6">
        <TopGreeting />
        <BalanceCard balance={10000} income={7000} expense={2000} />
        <TransactionList />
      </div>
    </div>
  );
}
