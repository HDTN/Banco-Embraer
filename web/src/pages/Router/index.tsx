import {
  Routes,
  Route,
} from "react-router-dom";
import TerminalPage from "../Terminal";


export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<TerminalPage />} />
      </Routes>
  );
}