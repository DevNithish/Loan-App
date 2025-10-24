import React, { useState } from "react";
import ProfileCard from "../Components/CustomerManagement/ProfileCard";
import LoanHistoryTable from "../Components/CustomerManagement/LoanHistoryTable";
import ActivityTimeline from "../Components/CustomerManagement/ActivityTimeline";
import EditCustomerForm from "../Components/CustomerManagement/EditCustomerForm";
import DocumentAttachmentArea from "../Components/CustomerManagement/DocumentAttachmentArea";
import TaggingWidget from "../Components/CustomerManagement/TaggingWidget";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerManagement = () => {
  const [customer, setCustomer] = useState({
    name: "John Doe",
    contact: "john@example.com",
    segment: "Premium",
    relationshipScore: 95,
  });

  const [loans] = useState([
    { id: 1, type: "Personal Loan", amount: "₹1,00,000", status: "Closed" },
    { id: 2, type: "Home Loan", amount: "₹8,00,000", status: "Active" },
  ]);

  const [activities] = useState([
    { date: "2025-10-12", activity: "Email sent" },
    { date: "2025-09-30", activity: "Loan discussion call" },
  ]);

  const [tags, setTags] = useState(["Premium", "Trusted"]);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleTagAdd = () => setTags([...tags, "New Tag"]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer Management Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <ProfileCard customer={customer} />
          <TaggingWidget tags={tags} handleTagAdd={handleTagAdd} />
          <DocumentAttachmentArea />
        </div>

        <div className="col-md-8">
          <EditCustomerForm customer={customer} handleEdit={handleEdit} />
          <LoanHistoryTable loans={loans} />
          <ActivityTimeline activities={activities} />
          {/* Removed static CRMWidget here */}
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
