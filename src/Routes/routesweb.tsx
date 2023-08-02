import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

const RoutesWeb = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About/>} />
  </Routes>
);

export default RoutesWeb;
