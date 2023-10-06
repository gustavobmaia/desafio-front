import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Situation from "./pages/Situation";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/situation" element={<Situation />} />
      </Routes>
    </>
  );
}
