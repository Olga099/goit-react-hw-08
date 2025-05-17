import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span>{name}: {phone}</span>
          <button onClick={() => handleDelete(id)} className={styles.button}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
