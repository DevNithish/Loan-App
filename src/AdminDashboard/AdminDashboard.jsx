import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";
import DashboardPage from "../features/dashboard/DashboardPage";
import LoanApplicationsPage from "../features/loanApplications/LoanApplicationsPage";
import CustomerManagement from "../Pages/CustomerManagement";
import RepaymentsCollectionsPage from "../Pages/RepaymentsCollectionsPage";
import DisbursementTransactionsPage from "../Pagess/Disbursements";
import RolesPermissionsPage from "../Pagess/RolesPermissionsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const PlaceholderPage = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

function AdminDashboard() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="page-content">
          <div className="container mt-4">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/loan-applications" element={<LoanApplicationsPage />} />
              <Route path="/customers" element={<CustomerManagement />} />
              <Route path="/repayments" element={<RepaymentsCollectionsPage />} />
              <Route path="/disbursements" element={<DisbursementTransactionsPage />} />
              <Route path="/roles" element={<RolesPermissionsPage />} />
              <Route
                path="/reports"
                element={<PlaceholderPage title="Reports & Analytics" />}
              />
              <Route
                path="/workflow"
                element={<PlaceholderPage title="Workflow & Automation" />}
              />
              <Route
                path="*"
                element={<PlaceholderPage title="404: Page Not Found" />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
