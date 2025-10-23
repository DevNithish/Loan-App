import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoanHistoryTable = ({ loans }) => (
  <div className="card shadow-sm mb-3">
    <div className="card-header bg-secondary text-white">Loan History</div>
    <div className="card-body">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.type}</td>
              <td>{loan.amount}</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default LoanHistoryTable;
