// @ts-ignore
import { ReactComponent as Arrow } from "../../assets/arrow-up-solid.svg";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <div className="flex h-16 items-center space-x-4">
      <Link
        to="/"
        className="flex h-10 w-10 -rotate-90 items-center justify-center rounded-2xl bg-white p-3"
      >
        <Arrow />
      </Link>
      <p className="text-2xl font-bold text-gray-700">Transactions</p>
    </div>
  );
}
