// @ts-nocheck
import { createContext, useReducer, useEffect } from "react";
import { Transaction } from "../types/types";
import { getAllTransactions } from "../services/transaction_services/getAllTransactions";

interface ITransactionsContext {
  transactions: Array<Transaction>;
  dispatch: (action: ACTIONTYPE) => void;
}

const initialState = { transactions: [] };

type ACTIONTYPE =
  | { type: "ADD_TRANSACTIONS"; payload: Array<Transaction> }
  | { type: "decrement"; payload: string };

export const TransactionsContext = createContext<ITransactionsContext | null>(
  null
);

function transactionsReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "ADD_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "decrement":
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
}

export const TransactionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  useEffect(() => {
    async function fetchTransactions(): Promise<void> {
      const res = await getAllTransactions()
      dispatch({type: "ADD_TRANSACTIONS", payload: res})
    }

    fetchTransactions()    
  }, []);

  return (
    <TransactionsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TransactionsContext.Provider>
  );
};
