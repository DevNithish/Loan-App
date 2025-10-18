import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import CustomerManagement from "./Pages/CustomerManagement";
import RepaymentsCollectionsPage from "./Pages/RepaymentsCollectionsPage";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Navbar from "./components/layout/Navbar/Navbar";
import DashboardPage from "./features/dashboard/DashboardPage";
import LoanApplicationsPage from "./features/loanApplications/LoanApplicationsPage";
import DisbursementTransactionsPage from "./Pagess/Disbursements";
import RolesPermissionsPage from "./Pagess/RolesPermissionsPage";
// import SettingsPage from './features/settings/SettingsPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// A placeholder component for pages you haven't built yet
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <main className="page-content">
            <div className="container mt-4">
              {/* Customer Management & Repayments Routes (from first code) */}
              <Routes>
                <Route path="/customers" element={<CustomerManagement />} />
                <Route
                  path="/repayments"
                  element={<RepaymentsCollectionsPage />}
                />
              </Routes>
            </div>

            {/* Existing Routes (from second code) */}
            <Routes>
              {/* Redirect default route to the Dashboard */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/loan-applications"
                element={<LoanApplicationsPage />}
              />
              {/* <Route path="/settings" element={<SettingsPage />} /> */}

              {/* Placeholder routes for other features */}
              <Route
                path="/customers"
                element={<PlaceholderPage title="Customers" />}
              />
              <Route
                path="/repayments"
                element={<PlaceholderPage title="Repayments" />}
              />
              <Route
                path="/disbursements"
                element={<DisbursementTransactionsPage />}
              />
              <Route path="/roles" element={<RolesPermissionsPage />} />
              <Route
                path="/reports"
                element={<PlaceholderPage title="Reports & Analytics" />}
              />
              <Route
                path="/workflow"
                element={<PlaceholderPage title="Workflow & Automation" />}
              />

              {/* A catch-all route for non-existent pages */}
              <Route
                path="*"
                element={<PlaceholderPage title="404: Page Not Found" />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
