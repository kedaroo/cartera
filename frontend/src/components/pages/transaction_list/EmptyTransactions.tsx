// @ts-ignore
import EmptyIllustration from "../../../assets/empty.jpg";

export default function EmptyTransactions() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <img
        src={EmptyIllustration}
        alt="empty"
        className="h-48 mix-blend-multiply"
      />
      <p className="text-lg text-gray-500">No transactions to show!</p>
    </div>
  );
}
