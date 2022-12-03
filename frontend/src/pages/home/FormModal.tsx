import { useState } from "react";
import { getCurrentDateTime } from "../../utils/form_modal/getCurrentDateTime";
import { capitalizeFirstLetter } from "../../utils/form_modal/capitalizeFirstLetter";
import { convertLocalToUTCTime } from "../../utils/form_modal/convertLocalToUTCTime";
import { TransactionCategories, AmountType } from "../../types/types";
// @ts-ignore
import { ReactComponent as CloseIcon } from "../../assets/xmark-solid.svg";
import { createTransaction } from "../../services/transaction_services/createTransaction";

interface Props {
  toggleModal: (arg: boolean) => void;
}

export default function FormModal({ toggleModal }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<string>(getCurrentDateTime());
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("food");
  const [type, setType] = useState<string>("income");

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const UTCTimestamp: string = convertLocalToUTCTime(timestamp);
    await createTransaction({
      name,
      amount: amount ? amount : 0,
      type,
      category,
      timestamp: UTCTimestamp,
    });
    toggleModal(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 p-6">
      <div
        onClick={() => toggleModal(false)}
        className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white p-4"
      >
        <CloseIcon />
      </div>
      <p className="text-2xl font-semibold">Add Expenses</p>
      <form
        className="mt-20 flex w-full flex-col items-center space-y-6"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          className="w-3/4 rounded-full py-4 text-center text-3xl shadow-sm transition-all"
          min={1}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          required
        />
        <input
          className="w-4/5 rounded-2xl py-4 text-center text-2xl shadow-sm"
          maxLength={22}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          max={getCurrentDateTime()}
          className="w-4/5 rounded-2xl p-4 text-center text-xl shadow-sm"
          required
        />
        <select
          className="w-4/5 rounded-2xl bg-white p-4 text-center text-xl shadow-sm"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={category}
          required
        >
          {Object.keys(TransactionCategories).map((category) => (
            <option key={Math.random()} value={category}>
              {capitalizeFirstLetter(category)}
            </option>
          ))}
        </select>
        <select
          className="w-4/5 rounded-2xl bg-white p-4 text-center text-xl shadow-sm"
          onChange={(e) => setType(e.target.value)}
          defaultValue={type}
          required
        >
          {Object.keys(AmountType).map((type) => (
            <option key={Math.random()} value={type}>
              {capitalizeFirstLetter(type)}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-4/5 rounded-2xl bg-blue-400 p-4 text-center text-xl  text-white shadow-md shadow-blue-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}
