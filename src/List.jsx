import React from 'react';

const List = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))}
      </ul>
    </div>
  );
};

export default List;
