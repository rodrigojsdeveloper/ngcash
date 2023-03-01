import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllRoutes } from "./routes";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AllRoutes />
    </>
  );
};

export { App };
