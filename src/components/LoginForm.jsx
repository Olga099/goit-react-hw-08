import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import { useState } from 'react';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Log In</button>
    </form>
  );
}
