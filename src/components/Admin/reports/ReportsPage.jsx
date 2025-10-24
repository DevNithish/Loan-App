// import React, { useState, useEffect } from "react";
// import FiltersPanel from "./FiltersPanel.jsx";
// import ReportCardGrid from "./ReportCardGrid.jsx";
// import ScheduledReportsTable from "./ScheduledReportsTable.jsx";
// import LoadingSpinner from "../LoadingSpinner.jsx";
// import "./reports.css";

// // Mock API to fetch pre-built reports
// const fetchPrebuiltReports = (filters) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const allReports = [
//         {
//           id: "loans",
//           title: "Loan Overview",
//           description: "Summary of all loan activities.",
//         },
//         {
//           id: "delinquencies",
//           title: "Delinquencies",
//           description: "Analysis of overdue accounts.",
//         },
//         {
//           id: "collections",
//           title: "Collections",
//           description: "Performance of collection efforts.",
//         },
//         {
//           id: "disbursements",
//           title: "Disbursements",
//           description: "Tracks all outgoing funds.",
//         },
//         {
//           id: "repayments",
//           title: "Repayments",
//           description: "Monitor incoming repayments.",
//         },
//         {
//           id: "customer-growth",
//           title: "Customer Growth",
//           description: "Analytics on new customers.",
//         },
//       ];
//       // In a real app, you would filter based on the `filters` object here
//       console.log("Filtering with:", filters);
//       resolve(allReports);
//     }, 500);
//   });
// };

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [filters, setFilters] = useState({});
//   const [selectedReport, setSelectedReport] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     fetchPrebuiltReports(filters).then((data) => {
//       setReports(data);
//       setIsLoading(false);
//     });
//   }, [filters]);

//   const handleFilterChange = (filterName, value) => {
//     setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
//   };

//   const handleSelectReport = (reportId) => {
//     const report = reports.find((r) => r.id === reportId);
//     setSelectedReport(report);
//   };

//   const handleBack = () => {
//     setSelectedReport(null);
//   };

//   // A simple detailed view when a report is selected
//   if (selectedReport) {
//     return (
//       <div className="container-fluid p-4">
//         <button onClick={handleBack} className="btn btn-outline-secondary mb-4">
//           &larr; Back to Reports
//         </button>
//         <div className="card shadow-sm">
//           <div className="card-header">
//             <h2>{selectedReport.title}</h2>
//           </div>
//           <div className="card-body" style={{ minHeight: "300px" }}>
//             <p>{selectedReport.description}</p>
//             <p className="text-center text-muted mt-5">
//               [Chart and detailed data for "{selectedReport.title}" would be
//               displayed here]
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Main dashboard view
//   return (
//     <div className="container-fluid p-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="h2">Reports & Analytics</h1>
//         {/* Placeholder for a "Create Report" button */}
//         <button className="btn btn-primary">Create Custom Report</button>
//       </div>

//       <FiltersPanel onFilterChange={handleFilterChange} />

//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <ReportCardGrid reports={reports} onSelectReport={handleSelectReport} />
//       )}

//       <ScheduledReportsTable />
//     </div>
//   );
// };

// export default ReportsPage;


import React, { useState, useEffect } from "react";
import FiltersPanel from "./FiltersPanel.jsx";
import ReportCardGrid from "./ReportCardGrid.jsx";
import ScheduledReportsTable from "./ScheduledReportsTable.jsx";
import LoadingSpinner from "../LoadingSpinner.jsx";
import "../admin.css";

// Mock API to fetch pre-built reports
const fetchPrebuiltReports = (filters) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allReports = [
        {
          id: "loans",
          title: "Loan Overview",
          description: "Summary of all loan activities with performance metrics",
          category: "Loans",
          updated: "2 hours ago"
        },
        {
          id: "delinquencies",
          title: "Delinquencies",
          description: "Analysis of overdue accounts and risk assessment",
          category: "Risk",
          updated: "1 day ago"
        },
        {
          id: "collections",
          title: "Collections",
          description: "Performance of collection efforts and recovery rates",
          category: "Operations",
          updated: "3 hours ago"
        },
        {
          id: "disbursements",
          title: "Disbursements",
          description: "Tracks all outgoing funds and allocation analysis",
          category: "Finance",
          updated: "5 hours ago"
        },
        {
          id: "repayments",
          title: "Repayments",
          description: "Monitor incoming repayments and cash flow trends",
          category: "Finance",
          updated: "Just now"
        },
        {
          id: "customer-growth",
          title: "Customer Growth",
          description: "Analytics on new customers and acquisition channels",
          category: "Marketing",
          updated: "2 days ago"
        },
      ];
      // In a real app, you would filter based on the `filters` object here
      console.log("Filtering with:", filters);
      resolve(allReports);
    }, 500);
  });
};

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [selectedReport, setSelectedReport] = useState(null);
  const [activeTab, setActiveTab] = useState("prebuilt");

  useEffect(() => {
    setIsLoading(true);
    fetchPrebuiltReports(filters).then((data) => {
      setReports(data);
      setIsLoading(false);
    });
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleSelectReport = (reportId) => {
    const report = reports.find((r) => r.id === reportId);
    setSelectedReport(report);
  };

  const handleBack = () => {
    setSelectedReport(null);
  };

  // A simple detailed view when a report is selected
  if (selectedReport) {
    return (
      <div className="container-fluid p-4">
        <div className="d-flex align-items-center mb-4">
          <button onClick={handleBack} className="btn btn-outline-secondary me-3">
            &larr; Back to Reports
          </button>
          <div>
            <h1 className="h2 mb-1">{selectedReport.title}</h1>
            <p className="text-muted mb-0">{selectedReport.description}</p>
          </div>
        </div>
        
        <div className="card report-detail-card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <h3 className="mb-1">{selectedReport.title}</h3>
              <span className="badge bg-primary">{selectedReport.category}</span>
              <small className="text-muted ms-2">Updated {selectedReport.updated}</small>
            </div>
            <div className="btn-group">
              <button className="btn btn-outline-primary btn-sm">
                Export PDF
              </button>
              <button className="btn btn-outline-primary btn-sm">
                Export CSV
              </button>
              <button className="btn btn-primary btn-sm">
                Schedule
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4 className="text-primary">1,245</h4>
                    <small className="text-muted">Total Loans</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4 className="text-success">$2.8M</h4>
                    <small className="text-muted">Total Value</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4 className="text-warning">3.2%</h4>
                    <small className="text-muted">Delinquency Rate</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4 className="text-info">94.7%</h4>
                    <small className="text-muted">Collection Rate</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="placeholder-chart bg-light rounded p-5 text-center">
              <div className="text-muted mb-3">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 3v18h18"/>
                  <path d="M18 17V9"/>
                  <path d="M13 17V5"/>
                  <path d="M8 17v-3"/>
                </svg>
              </div>
              <h5 className="text-muted">Interactive Chart Visualization</h5>
              <p className="text-muted mb-0">
                Detailed analytics and charts for "{selectedReport.title}" would be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard view
  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 mb-1">Reports & Analytics</h1>
          <p className="text-muted mb-0">Monitor and analyze your lending portfolio performance</p>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Create Custom Report
        </button>
      </div>

      <FiltersPanel onFilterChange={handleFilterChange} />

      {/* Tab Navigation */}
      <div className="card mb-4">
        <div className="card-body">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === "prebuilt" ? "active" : ""}`}
                onClick={() => setActiveTab("prebuilt")}
              >
                Pre-Built Reports
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === "scheduled" ? "active" : ""}`}
                onClick={() => setActiveTab("scheduled")}
              >
                Scheduled Reports
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === "custom" ? "active" : ""}`}
                onClick={() => setActiveTab("custom")}
              >
                Custom Reports
              </button>
            </li>
          </ul>
        </div>
      </div>

      {activeTab === "prebuilt" && (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <ReportCardGrid reports={reports} onSelectReport={handleSelectReport} />
        )
      )}

      {activeTab === "scheduled" && <ScheduledReportsTable />}

      {activeTab === "custom" && (
        <div className="card">
          <div className="card-body text-center py-5">
            <div className="text-muted mb-3">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h4 className="text-muted mb-2">No Custom Reports</h4>
            <p className="text-muted mb-3">Create your first custom report to get started</p>
            <button className="btn btn-primary">
              Create Custom Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;