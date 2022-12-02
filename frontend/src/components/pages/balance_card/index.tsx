import BifurcatedAmount from "./BifurcatedAmount";
import { AmountType } from "../../../types/types";

interface Props {
  balance: number;
  income: number;
  expense: number;
}

export default function BalanceCard({
  balance,
  income,
  expense,
}: Props): JSX.Element {
  return (
    <div className="mt-6 flex h-52 flex-col items-center justify-center space-y-4 rounded-3xl bg-gradient-to-br from-blue-400 to-pink-500 px-5 text-white shadow-2xl">
      <p>Total Balance</p>
      <p className="text-5xl font-semibold">₹ {balance}</p>
      <div className="flex w-full justify-between ">
        <BifurcatedAmount amount={income} type={AmountType.income} />
        <BifurcatedAmount amount={expense} type={AmountType.expense} />
      </div>
    </div>
  );
}
