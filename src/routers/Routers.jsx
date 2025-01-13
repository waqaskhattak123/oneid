import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../view/Dashboard/Home";
import MySubscription from "../view/MySubscription/MySubscription";
import Navbar from "../components/Navbar";
import CreditLine from "../view/CreditLine/CreditLine";
import Footer from "../components/Footer";
import MyInvoices from "../view/MyInvoices/MyInvoices";
import StorageSubscription from "../view/StorageSubscription/StorageSubscription";
import DeveloperSection from "../view/DevelopersSection/DeveloperSection";
import ViewTransation from "../view/ViewTransation/ViewTransation";
import Settings from "../view/Profile/Settings";
import LoginHome from "../view/logIn/LoginHome";

// Define Routes
const Routers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my_subscription" element={<MySubscription />} />
            <Route path="/my_invoices" element={<MyInvoices />} />
            <Route path="/credit_line" element={<CreditLine />} />
            <Route path="/developer_section" element={<DeveloperSection />} />
            <Route path="/view_transation" element={<ViewTransation />} />
            <Route path="/profile_setting" element={<Settings />} />
            <Route path="/login" element={<LoginHome />} />
            <Route
              path="/storage_subscription"
              element={<StorageSubscription />}
            />
          </Routes>
        </Router>
      </main>
      {/* <footer className=" text-white p-4 text-center">
        <Footer />
      </footer> */}
    </div>
  );
};

export default Routers;
