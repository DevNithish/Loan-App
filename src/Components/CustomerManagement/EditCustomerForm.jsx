import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCustomerForm = ({ customer, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <span>Edit Customer Info</span>
        <button
          type="button"
          className={`btn btn-sm ${isEditing ? "btn-success" : "btn-light"}`}
          onClick={handleToggleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="card-body">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={customer.name}
              onChange={handleEdit}
              disabled={!isEditing}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Contact</label>
            <input
              className="form-control"
              type="email"
              name="contact"
              value={customer.contact}
              onChange={handleEdit}
              disabled={!isEditing}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Segment</label>
            <input
              className="form-control"
              type="text"
              name="segment"
              value={customer.segment}
              onChange={handleEdit}
              disabled={!isEditing}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerForm;
