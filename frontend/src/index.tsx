import ReactDOM from "react-dom/client";
import { TransactionsContextProvider } from "./context/TransactionsContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TransactionsContextProvider>
    <App />
  </TransactionsContextProvider>
);
