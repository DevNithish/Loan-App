import React, { useState } from 'react';
import styles from './LoanApplicationForm.module.css';
import Button from '../../../../components/common/Button/Button';
import DocumentUploader from '../DocumentUploader/DocumentUploader';

const LoanApplicationForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className={styles.formContainer}>
      {/* Progress Tracker */}
      <div className={styles.progressTracker}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <section>
          <h2 className={styles.stepTitle}>Step 1: Personal Information</h2>
          <div className={styles.formGrid}>
            <input type="text" placeholder="First Name" className={styles.input} />
            <input type="text" placeholder="Last Name" className={styles.input} />
            <input type="email" placeholder="Email Address" className={styles.input} />
            <input type="tel" placeholder="Phone Number" className={styles.input} />
          </div>
        </section>
      )}

      {/* Step 2: Loan Details */}
      {step === 2 && (
        <section>
          <h2 className={styles.stepTitle}>Step 2: Loan Details</h2>
          <div className={styles.formGrid}>
            <input type="number" placeholder="Loan Amount" className={styles.input} />
            <select className={styles.input}>
              <option>Personal Loan</option>
              <option>Business Loan</option>
            </select>
          </div>
        </section>
      )}

      {/* Step 3: Documents */}
      {step === 3 && (
        <section>
          <h2 className={styles.stepTitle}>Step 3: Upload Documents</h2>
          <DocumentUploader />
        </section>
      )}
      
      {/* Step 4: Review & Submit */}
      {step === 4 && (
        <section>
          <h2 className={styles.stepTitle}>Step 4: Review & Submit</h2>
          <p>Please review your information before submitting.</p>
        </section>
      )}

      {/* Navigation Buttons */}
      <div className={styles.navigation}>
        {step > 1 && <Button onClick={prevStep} variant="secondary">Previous</Button>}
        {step < totalSteps && <Button onClick={nextStep} variant="primary">Next</Button>}
        {step === totalSteps && <Button onClick={() => alert('Submitted!')} variant="primary">Submit Application</Button>}
      </div>
    </div>
  );
};

export default LoanApplicationForm;