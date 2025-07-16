import React, { useState } from 'react';
import { app } from '/firebase'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const CreateUserWithEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered successfully", userCredential.user);
        alert("User registered successfully");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        alert("Failed to register user: " + error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
      <input id="email"name="email"type="email"placeholder="Enter your email"value={email}onChange={(e) => setEmail(e.target.value)} /><br />
       <label htmlFor="password">Password</label>
        <input id="password"name="password"type="password" placeholder="Enter your password"value={password}onChange={(e) => setPassword(e.target.value)}/><br />
       <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateUserWithEmail;
