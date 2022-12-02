import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Transactions from "./pages/transactions";

export default function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
