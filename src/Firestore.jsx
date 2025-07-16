import React, { useState } from 'react';

const Firestore = () => {
  const [form, setForm] = useState({
    id: '',
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
        <label htmlFor="id">ID</label>
        <input
          id="id"
          name="id"
          type="number"
          placeholder="Enter your ID"
          value={form.id}
          onChange={handleChange}
        /><br />

        <label htmlFor="name">Name</label>
        <input id="name"name="name"type="text"placeholder="Enter your name" value={form.name} onChange={handleChange}/><br />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"placeholder="Enter your email"value={form.email}onChange={handleChange}/><br />
         <label htmlFor="password">Password</label>
        <input id="password"name="password"type="password"placeholder="Enter your password"value={form.password}onChange={handleChange} /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Firestore;
