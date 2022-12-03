// @ts-ignore
import Avatar from "../../assets/photo.jpg";
// @ts-ignore
import { ReactComponent as PlusIcon } from "../../assets/plus-solid.svg";

interface Props {
  toggleModal: (arg: boolean) => void;
}

export default function TopGreeting({ toggleModal }: Props): JSX.Element {
  return (
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src={Avatar}
          alt="avatar"
        />
        <div className="flex flex-col justify-between">
          <p className="text-lg font-semibold text-gray-500">Welcome!</p>
          <p className="text-2xl font-bold text-gray-700">Kedar Basutkar</p>
        </div>
      </div>
      <div
        onClick={() => toggleModal(true)}
        className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-2"
      >
        <PlusIcon />
      </div>
    </div>
  );
}
