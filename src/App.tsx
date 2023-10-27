import Confirmation from 'src/components/Confirmation/Confirmation';
import Header from 'src/components/Header/Header';
import { FIELD_SET } from 'src/data/field-set';
import Form from 'src/features/Form/Form';
import { selectSubmitted, selectFullName } from 'src/features/Form/FormSlice';
import { useAppSelector } from 'src/redux/hooks';
import styles from './App.module.css';

function App() {
  const fullName = useAppSelector(selectFullName);
  const submitted = useAppSelector(selectSubmitted);

  return (
    <main className={styles.app}>
      <Header />
      {!submitted ? (
        <h2>Complete The Form</h2>
      ) : (
        <h2>Thank you for completing the form, {fullName}!</h2>
      )}
      {submitted ? <Confirmation /> : <Form fieldSet={FIELD_SET} />}
    </main>
  );
}

export default App;
