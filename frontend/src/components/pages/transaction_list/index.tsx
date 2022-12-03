// @ts-ignore
import { ReactComponent as AnalyticsIcon } from "../../../assets/chart-pie-solid.svg";
import TransactionItem from "./TransactionItem";
import { Transaction } from "../../../types/types";
import { IconMap } from "./IconMap";

interface Props {
  transactions: Array<Transaction>;
}

export default function TransactionList({ transactions }: Props): JSX.Element {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-gray-700">Transactions</p>
        <div className="h-10 w-10 rounded-2xl bg-white p-2">
          <AnalyticsIcon />
        </div>
      </div>
      <div className="flex flex-col-reverse">
        {transactions.map((transaction) => {
          return (
            <TransactionItem
              key={transaction.id}
              category={transaction.category}
              name={transaction.name}
              amount={transaction.amount}
              timestamp={transaction.timestamp}
              type={transaction.type}
              Icon={IconMap.get(transaction.category)}
            />
          );
        })}
      </div>
    </div>
  );
}
