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
import Login from "../view/logIn/Login";

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
            <Route path="/my_invoices" element={<MyInvoices />} />
            <Route path="/credit_line" element={<CreditLine />} />
            <Route path="/developer_section" element={<DeveloperSection />} />
            <Route path="/view_transation" element={<ViewTransation />} />
            <Route path="/profile_setting" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/storage_subscription"
              element={<StorageSubscription />}
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default Routers;
