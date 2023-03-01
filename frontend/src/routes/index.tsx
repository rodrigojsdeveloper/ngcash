import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/Not Found";
import { Register } from "../pages/Register";
import { Session } from "../pages/Session";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/session" element={<Session />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" index element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
