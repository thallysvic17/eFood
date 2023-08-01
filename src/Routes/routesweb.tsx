import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const RoutesWeb = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<></>} />
  </Routes>
);

export default RoutesWeb;
