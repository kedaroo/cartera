// @ts-ignore
import { ReactComponent as AnalyticsIcon } from "../../../assets/chart-pie-solid.svg";
// @ts-ignore
import { ReactComponent as FoodIcon } from "../../../assets/utensils-solid.svg";
// @ts-ignore
import { ReactComponent as PetrolIcon } from "../../../assets/gas-pump-solid.svg";
// @ts-ignore
import { ReactComponent as MoneyIcon } from "../../../assets/sack-dollar-solid.svg";
import TransactionItem from "./TransactionItem";
import { AmountType } from "../../../types/types";

// category: string;
//   title: string;
//   amount: number;
//   date: Date;

export enum TransactionCategories {
  food,
  petrol,
}

export default function TransactionList(): JSX.Element {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-gray-700">Transactions</p>
        <div className="h-10 w-10 rounded-2xl bg-white p-2">
          <AnalyticsIcon />
        </div>
      </div>
      <TransactionItem
        category={TransactionCategories.food}
        title="Ice Cream"
        amount={30}
        date={new Date(2022, 12, 2)}
        type={AmountType.expense}
        Icon={FoodIcon}
      />
      <TransactionItem
        category={TransactionCategories.petrol}
        title="Activa Petrol"
        amount={200}
        date={new Date(2022, 12, 1)}
        type={AmountType.expense}
        Icon={PetrolIcon}
      />
      <TransactionItem
        category={TransactionCategories.petrol}
        title="Fable Stipend"
        amount={22200}
        date={new Date(2022, 12, 1)}
        type={AmountType.income}
        Icon={MoneyIcon}
      />
    </div>
  );
}
