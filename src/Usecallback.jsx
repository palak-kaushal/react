import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  // useCallback memoizes the function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>useCallback </h2>
      <p>Count: {count}</p>
      <p>Clicks: {clicks}</p>

      <button onClick={increment}>Increment </button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Counter;
