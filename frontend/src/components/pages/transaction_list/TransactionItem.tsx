import { TransactionCategories } from "./index";
import { AmountType } from "../../../types/types";

interface Props {
  category: TransactionCategories;
  title: string;
  amount: number;
  date: Date;
  type: AmountType;
  Icon: React.ComponentClass;
}

export default function TransactionItem({
  category,
  title,
  amount,
  date,
  type,
  Icon,
}: Props): JSX.Element {
  const sign = type === AmountType.income ? "+" : "-";

  return (
    <div className="my-6 flex justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div
          className={`icon ${category} flex h-14 w-14 items-center justify-center rounded-full bg-orange-200 p-4 shadow-md`}
        >
          <Icon />
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-medium text-gray-600">
          {sign}₹{amount}
        </p>
        <p className="font-medium text-gray-400">{date.getUTCFullYear()}</p>
      </div>
    </div>
  );
}
