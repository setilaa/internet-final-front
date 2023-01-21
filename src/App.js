import MainRouter from "./routes/MainRouter"
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <MainRouter />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
