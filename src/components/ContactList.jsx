import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { selectFilteredContacts } from '../redux/contacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
