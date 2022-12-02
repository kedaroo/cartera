// @ts-ignore
import { ReactComponent as ArrowIcon } from "../../../assets/arrow-up-solid.svg";
import { AmountType } from "../../../types/types";

interface Props {
  amount: number;
  type: AmountType;
}

export default function BifurcatedAmount({ amount, type }: Props): JSX.Element {
  const fill = type === AmountType.income ? "lightgreen" : "red";
  const rotate = type === AmountType.income ? "rotate-180" : "";
  const title = type === AmountType.income ? "Income" : "Expenses";
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/20 p-2 ${rotate}`}
      >
        <ArrowIcon fill={fill} />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="font-semibold">2,5000,000</p>
      </div>
    </div>
  );
}
