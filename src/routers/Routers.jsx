import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../view/Dashboard/Home";
import MySubscription from "../view/MySubscription/MySubscription";
import Navbar from "../components/Navbar";
import CreditLine from "../view/CreditLine/CreditLine";
import Footer from "../components/Footer";

// Define Routes
const Routers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my_subscription" element={<MySubscription />} />
            <Route path="/credit_line" element={<CreditLine />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default Routers;
