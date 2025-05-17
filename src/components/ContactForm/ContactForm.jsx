import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;
