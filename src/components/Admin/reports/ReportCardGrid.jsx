// import React from "react";

// const ReportCard = ({ report, onSelectReport }) => (
//   <div className="col">
//     <div
//       className="card h-100 report-card shadow-sm"
//       onClick={() => onSelectReport(report.id)}
//       role="button"
//       tabIndex="0"
//     >
//       <div className="card-body text-center">
//         <div className="report-card-icon mb-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="48"
//             height="48"
//             fill="currentColor"
//             className="bi bi-bar-chart-line-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
//           </svg>
//         </div>
//         <h5 className="card-title">{report.title}</h5>
//         <p className="card-text text-muted">{report.description}</p>
//       </div>
//     </div>
//   </div>
// );

// const ReportCardGrid = ({ reports, onSelectReport }) => {
//   return (
//     <div>
//       <h3 className="mb-4">Pre-Built Reports</h3>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//         {reports.map((report) => (
//           <ReportCard
//             key={report.id}
//             report={report}
//             onSelectReport={onSelectReport}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportCardGrid;
import React from "react";
import "../admin.css";

const ReportCard = ({ report, onSelectReport }) => (
  <div className="col">
    <div
      className="card h-100 report-card"
      onClick={() => onSelectReport(report.id)}
      role="button"
      tabIndex="0"
      onKeyPress={(e) => e.key === 'Enter' && onSelectReport(report.id)}
    >
      <div className="card-body">
        <div className="report-card-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
          </svg>
        </div>
        <h5 className="report-card-title">{report.title}</h5>
        <p className="report-card-description">{report.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="badge bg-light text-dark">{report.category}</span>
          <small className="text-muted">{report.updated}</small>
        </div>
      </div>
    </div>
  </div>
);

const ReportCardGrid = ({ reports, onSelectReport }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Pre-Built Reports</h3>
        <small className="text-muted">{reports.length} reports available</small>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onSelectReport={onSelectReport}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportCardGrid;