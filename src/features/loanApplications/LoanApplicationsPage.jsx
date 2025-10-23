// src/features/loanApplications/LoanApplicationsPage.jsx

import React, { useState, useEffect } from 'react';
import styles from './LoanApplicationsPage.module.css'; // This will now work correctly
import { loanService } from '../../services/loanService';
import ApplicationTable from './components/ApplicationTable/ApplicationTable';
import LoanApplicationForm from './components/LoanApplicationForm/LoanApplicationForm';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import Modal from '../../components/common/Modal/Modal';

const LoanApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        // Assuming a mock or real API response
        const mockData = [
            { id: 1, applicant: 'John Doe', loanType: 'Personal', amount: '$5,000', status: 'Approved', dateApplied: '2025-10-14' },
            { id: 2, applicant: 'Jane Smith', loanType: 'Business', amount: '$25,000', status: 'Pending', dateApplied: '2025-10-12' },
        ];
        // In a real scenario: const response = await loanService.getLoans();
        // setApplications(response.data);
        setApplications(mockData); 
        setError(null);
      } catch (err) {
        setError('Failed to fetch loan applications.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  let content;
  if (isLoading) {
    content = <p>Loading applications...</p>;
  } else if (error) {
    content = <p className={styles.error}>{error}</p>;
  } else {
    content = <ApplicationTable applications={applications} />;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Loan Applications</h1>
        <Button variant="primary" onClick={handleOpenModal}>
          New Loan Application
        </Button>
      </div>
      
      <Card>
        {content}
      </Card>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <LoanApplicationForm />
        </Modal>
      )}
    </div>
  );
};

export default LoanApplicationsPage;