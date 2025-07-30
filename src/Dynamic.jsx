import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Dynamic = () => {
  const { id } = useParams(); 

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <h1>{id}</h1> 
    </div>
  );
};

export default Dynamic;
