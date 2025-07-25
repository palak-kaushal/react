import React, { useState, useMemo } from 'react';

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Memoize the square calculation
  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Square Calculator </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Enter a number"/><p>Square: {square}</p>

      <button onClick={() => setClicks(clicks + 1)}>increment({clicks})
      </button>
    </div>
  );
};

export default SquareCalculator;
