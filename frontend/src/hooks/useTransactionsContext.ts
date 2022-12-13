import { TransactionsContext } from "../context/TransactionsContext";
import { useContext } from "react";

export function useTransactionsContext() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw Error("useTransactionsContext must be used inside an TransactionsContextProvider");
  }

  return context;
}
