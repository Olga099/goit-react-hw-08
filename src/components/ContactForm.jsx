import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import { selectFilteredContacts } from '../redux/contacts/selectors';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const duplicate = contacts.find(contact => contact.name === formData.name);
    if (duplicate) {
      alert(`${formData.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
}
