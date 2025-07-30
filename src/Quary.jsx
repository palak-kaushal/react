import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Query = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchParams({ query }); 
  };


  return (
    <div>
      <h2>Search page</h2>
      <input 
        type="text" 
        placeholder="search something " 
        onChange={handleChange}
      />
      <button onClick={handleChange}>clear</button>
      <p>Query: {searchParams.get("query")}</p>
    </div>
  );
};

export default Query;
