import React, { useState, useEffect } from "react";

const fetchScheduledReports = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Daily Loan Origination Report",
          frequency: "Daily",
          nextRun: "2025-10-16 08:00",
        },
        {
          id: 2,
          name: "Weekly Delinquency Summary",
          frequency: "Weekly",
          nextRun: "2025-10-20 09:00",
        },
        {
          id: 3,
          name: "Monthly Collections Performance",
          frequency: "Monthly",
          nextRun: "2025-11-01 12:00",
        },
      ]);
    }, 1000);
  });
};

const ScheduledReportsTable = () => {
  const [scheduledReports, setScheduledReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchScheduledReports().then((data) => {
      setScheduledReports(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h3 className="mb-4">Scheduled Reports</h3>
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Report Name</th>
                <th scope="col">Frequency</th>
                <th scope="col">Next Run Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {scheduledReports.length > 0 ? (
                scheduledReports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>{report.frequency}</td>
                    <td>{new Date(report.nextRun).toLocaleString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No scheduled reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduledReportsTable;
