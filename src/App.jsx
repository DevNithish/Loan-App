import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomerManagement from "./Pages/CustomerManagement";
import RepaymentsCollectionsPage from "./Pages/RepaymentsCollectionsPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        {/* <nav className="d-flex justify-content-center mb-4">
          <Link to="/" className="btn btn-outline-primary me-3">
            Customer Management
          </Link>
          <Link to="/repayments" className="btn btn-outline-success">
            Repayments & Collections
          </Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<CustomerManagement />} />
          <Route path="/repayments" element={<RepaymentsCollectionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
