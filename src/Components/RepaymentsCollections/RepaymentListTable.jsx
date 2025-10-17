import React, { useState } from "react";
import EscalationNotesModal from "./EscalationNotesModal";
import StatusBadge from "./StatusBadge";

const RepaymentListTable = () => {
  const [showModal, setShowModal] = useState(false);

  const data = [
    { customer: "John Doe", dueDate: "2025-10-15", amount: "₹50,000", status: "Paid" },
    { customer: "Jane Smith", dueDate: "2025-10-12", amount: "₹30,000", status: "Overdue" },
  ];

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-primary text-white fw-semibold">
        Repayment Schedules
      </div>
      <div className="card-body">
        <table className="table table-hover table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Customer</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.customer}</td>
                <td>{row.dueDate}</td>
                <td>{row.amount}</td>
                <td><StatusBadge status={row.status} /></td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => setShowModal(true)}
                  >
                    Add Escalation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && <EscalationNotesModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default RepaymentListTable;
