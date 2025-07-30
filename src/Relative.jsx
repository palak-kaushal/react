import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Relative = () => {
  return (
    <div>
      <h2>Categories</h2>
      <nav>
        <Link to="pent">Pent</Link> |{' '}
        <Link to="shirt">Shirt</Link> |{' '}
        <Link to="t-short">T-Shirt</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Relative;
