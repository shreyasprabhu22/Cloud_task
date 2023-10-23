import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    course: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#3498db', margin: '0', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
        <h2 style={{ color: '#3498db' }}>Student Registration Form</h2>
        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} style={{ width: 'calc(100% - 16px)', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

        <label htmlFor="lastName" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} style={{ width: 'calc(100% - 16px)', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: 'calc(100% - 16px)', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

        <label htmlFor="course" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>Course:</label>
        <select id="course" name="course" value={formData.course} onChange={handleInputChange} style={{ width: 'calc(100% - 16px)', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}>
          <option value="computerScience">Computer Science</option>
          <option value="biology">Biology</option>
          <option value="history">History</option>
          {/* Add more options as needed */}
        </select>

        <button type="submit" style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
