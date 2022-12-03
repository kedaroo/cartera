import { TransactionCategories } from "../../../types/types";
import { AmountType } from "../../../types/types";
import { formatDistanceToNow, parseISO } from "date-fns";

interface Props {
  category: TransactionCategories;
  name: string;
  amount: number;
  timestamp: string;
  type: AmountType;
  Icon: React.ComponentClass;
}

export default function TransactionItem({
  category,
  name,
  amount,
  timestamp,
  type,
  Icon,
}: Props): JSX.Element {
  const sign = type === AmountType.income ? "+" : "-";

  return (
    <div className="my-3 flex justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div
          className={`icon ${category} flex h-14 w-14 items-center justify-center rounded-full bg-orange-200 p-4 shadow-md`}
        >
          <Icon />
        </div>
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-medium text-gray-600">
          {sign}₹{amount}
        </p>
        <p className="font-medium text-gray-400">
          {formatDistanceToNow(parseISO(timestamp), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}
