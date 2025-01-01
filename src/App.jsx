import { ToastContainer } from "react-toastify";
import Routers from "./routers/Routers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routers />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 999999 }}
      />
    </div>
  );
}
export default App;
