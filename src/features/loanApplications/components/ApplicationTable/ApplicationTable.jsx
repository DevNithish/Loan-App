import React from 'react';
import Table from '../../../../components/common/Table/Table';
import Button from '../../../../components/common/Button/Button';
import styles from './ApplicationTable.module.css'; // Corrected import path

const ApplicationTable = ({ applications }) => {
  const applicationHeaders = ['Applicant', 'Loan Type', 'Amount', 'Status', 'Date Applied', 'Actions'];
  
  const tableData = applications.map(app => ({
    applicant: app.applicant,
    loanType: app.loanType,
    amount: app.amount,
    status: app.status,
    dateApplied: app.dateApplied,
    actions: (
      <div className={styles.actions}>
        <Button variant="secondary">View</Button>
      </div>
    )
  }));

  return (
    <Table headers={applicationHeaders} data={tableData} />
  );
};

export default ApplicationTable;