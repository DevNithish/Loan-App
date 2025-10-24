import React, { useState } from "react";
import ReportsPage from "./components/Admin/reports/ReportsPage.jsx";
import SettingsPage from "./components/Admin/settings/SettingsPage.jsx";
import NotificationCenter from "./components/Admin/notifications/NotificationCente.jsx";
import { ChartBarIcon, SettingsIcon } from "./components/Admin/icons.jsx";

const App = () => {
  const [activePage, setActivePage] = useState("reports");

  const renderPage = () => {
    switch (activePage) {
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome</h5>
              <p className="card-text">Select a page from the sidebar.</p>
            </div>
          </div>
        );
    }
  };

  const NavLink = ({ page, icon, children }) => (
    <button
      onClick={() => setActivePage(page)}
      className={`nav-link-button ${activePage === page ? "active" : ""}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">LoanPro</div>
        <nav className="sidebar-nav">
          <NavLink page="dashboard" icon={<ChartBarIcon />}>
            Dashboard
          </NavLink>
          <NavLink page="reports" icon={<ChartBarIcon />}>
            Reports & Analytics
          </NavLink>
          <NavLink page="settings" icon={<SettingsIcon />}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="app-header">
          <NotificationCenter />
        </header>
        <main className="content-wrapper">{renderPage()}</main>
      </div>
    </div>
  );
};

export default App;
