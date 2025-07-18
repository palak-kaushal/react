import React, { useState } from 'react';

const Firestore = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name"name="name"type="text"placeholder="Enter your name" value={form.name} onChange={handleChange}/><br></br><br></br>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"placeholder="Enter your email"value={form.email}onChange={handleChange}/><br></br><br></br>
         <label htmlFor="password">Password</label>
        <input id="password"name="password"type="password"placeholder="Enter your password"value={form.password}onChange={handleChange} /><br></br><br></br>
        <label htmlFor Upload> Image</label>
        <input  id="image" name = "image" type="file" placeholder="image" value ={form.image} onChange={handleChange}/><br></br><br></br>
        <button type="submit">Save</button>
        
      </form>
    </div>
  );
};

export default Firestore;
