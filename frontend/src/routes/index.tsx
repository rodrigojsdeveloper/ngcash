import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/Not Found";
import { Register } from "../pages/Register";
import { Session } from "../pages/Session";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Session />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" index element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
