import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { useState } from 'react';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
