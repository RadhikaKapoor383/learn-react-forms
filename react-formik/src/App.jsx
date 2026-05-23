import { useState } from 'react';
import './App.css';
function Form() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [degree, setDegree] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert(`Name: ${name}`,
             `Email: ${email}`, 
             `Password: ${password}`, 
             `Confirm Password: ${confirmPassword}`, 
             `Age: ${age}`, 
             `Date of Birth: ${dateOfBirth}`);
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAge('');
    setDateOfBirth('');
    setGender('');
    setDegree('');
    setSkills([]);
    setExperience('');
    setBio('');
    setHobbies([]);
    setCountry('');
    setTerms(false);
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
    if (password.trim() === '') {
      setError('Password is required');
      return false;
    }
    if (confirmPassword.trim() === '') {
      setError('Confirm Password is required');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (age.trim() === '') {
      setError('Age is required');
      return false;
    }
    if (dateOfBirth.trim() === '') {
      setError('Date of Birth is required');
      return false;
    }
    if (!terms) {
      setError('You must accept the terms and conditions');
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
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /> <br />
      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /> <br />
      <label>Age:</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} /><br /> <br />
      <label>Date of Birth:</label>
      <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /><br /> <br />
      <label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br /> <br />
      <label>Degree:</label>
      <select value={degree} onChange={(e) => setDegree(e.target.value)}>
        <option value="">Select</option>
        <option value="bachelor">Bachelor's</option>
        <option value="master">Master's</option>
        <option value="phd">PhD</option>
      </select><br /> <br />
      <label>Skills:</label>
      <input type="checkbox" value="javascript" checked={skills.includes('javascript')} onChange={(e) => {
        if (e.target.checked) {
          setSkills([...skills, 'javascript']);
        } else {
          setSkills(skills.filter(skill => skill !== 'javascript'));
        }
      }} /> JavaScript
      <input type="checkbox" value="react" checked={skills.includes('react')} onChange={(e) => {
        if (e.target.checked) {
          setSkills([...skills, 'react']);
        } else {
          setSkills(skills.filter(skill => skill !== 'react'));
        }
      }} /> React
      <input type="checkbox" value="nodejs" checked={skills.includes('nodejs')} onChange={(e) => {
        if (e.target.checked) {
          setSkills([...skills, 'nodejs']);
        } else {
          setSkills(skills.filter(skill => skill !== 'nodejs'));
        }      }} /> Node.js<br /> <br />
      <label>Experience:</label>
      <textarea value={experience} onChange={(e) => setExperience(e.target.value)}></textarea><br /> <br />
      <label>Bio:</label>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea><br /> <br />
      <label>Hobbies:</label>
      <input type="checkbox" value="reading" checked={hobbies.includes('reading')} onChange={(e) => {
        if (e.target.checked) {
          setHobbies([...hobbies, 'reading']);
        } else {
          setHobbies(hobbies.filter(hobby => hobby !== 'reading'));
        }
      }} /> Reading
      <input type="checkbox" value="traveling" checked={hobbies.includes('traveling')} onChange={(e) => {
        if (e.target.checked) {
          setHobbies([...hobbies, 'traveling']);
        } else {
          setHobbies(hobbies.filter(hobby => hobby !== 'traveling'));
        }
      }} /> Traveling
      <input type="checkbox" value="cooking" checked={hobbies.includes('cooking')} onChange={(e) => {
        if (e.target.checked) {
          setHobbies([...hobbies, 'cooking']);
        } else {
          setHobbies(hobbies.filter(hobby => hobby !== 'cooking'));
        }
      }} /> Cooking<br /> <br />
      <label>Country:</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
      </select><br /> <br />
      <label>
        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        I accept the terms and conditions
      </label><br /> <br />

      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
      <Form />
    </div>
  );
}
