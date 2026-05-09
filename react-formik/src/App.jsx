import { useState } from 'react';
function Form() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert(`Name: ${name}, Email: ${email}`);
    }
    setName('');
    setEmail('');
  }
  function validate() {
    if (name.trim() === '') {
      setError('Name is required');
      return false;
    }
    if (email.trim() === '') {
      setError('Email is required');
      return false;
    }
    setError('');
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
      <label>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} /><br /> <br />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>React Formik</h1>
      <Form />
    </div>
  );
}