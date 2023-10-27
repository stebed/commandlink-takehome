import { selectFormData, resetForm } from 'src/features/Form/FormSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import styles from './Confirmation.module.css';

const Confirmation = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormData);

  const handleClick = () => {
    dispatch(resetForm());
  };

  return (
    <div className={styles.confirmationContainer}>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <label>First Name</label>
          <div className={styles.fieldData}>{formData.firstName}</div>
        </div>
        <div className={styles.rowContainer}>
          <label>Last Name</label>
          <div className={styles.fieldData}>{formData.lastName}</div>
        </div>
      </div>
      <div className={styles.rowContainer}>
        <label>Email</label>
        <div className={styles.fieldData}>{formData.email}</div>
      </div>
      <div className={styles.rowContainer}>
        <label>Address</label>
        <div className={styles.fieldData}>{formData.address}</div>
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <label>City</label>
          <div className={styles.fieldData}>{formData.city}</div>
        </div>
        <div className={styles.rowContainer}>
          <label>State</label>
          <div className={styles.fieldData}>{formData.state}</div>
        </div>
        <div className={styles.rowContainer}>
          <label>Zip Code</label>
          <div className={styles.fieldData}>{formData.zipCode}</div>
        </div>
      </div>
      <div className={styles.rowContainer}>
        <label>Phone</label>
        <div className={styles.fieldData}>{formData.phone}</div>
      </div>
      <div className={styles.rowContainer}>
        <label>Job Title</label>
        <div className={styles.fieldData}>{formData.jobTitle}</div>
      </div>
      <div className={styles.rowContainer}>
        <label>Reason</label>
        <div className={styles.fieldData}>{formData.reason}</div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>Go Back</button>
      </div>
    </div>
  );
};

export default Confirmation;
