import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Navbar from './components/layout/Navbar/Navbar';
import DashboardPage from './features/dashboard/DashboardPage';
import LoanApplicationsPage from './features/loanApplications/LoanApplicationsPage';
import './App.css'; // Styles for the main layout

// A placeholder component for pages you haven't built yet
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '2rem' }}>
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
            <Routes>
              {/* Default route to the Dashboard */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/loan-applications" element={<LoanApplicationsPage />} />
              
              {/* Placeholder routes for other features */}
              <Route path="/customers" element={<PlaceholderPage title="Customers" />} />
              <Route path="/repayments" element={<PlaceholderPage title="Repayments" />} />
              <Route path="/reports" element={<PlaceholderPage title="Reports & Analytics" />} />
              <Route path="/settings" element={<PlaceholderPage title="Settings" />} />

              {/* A catch-all route for non-existent pages */}
              <Route path="*" element={<PlaceholderPage title="404: Page Not Found" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;