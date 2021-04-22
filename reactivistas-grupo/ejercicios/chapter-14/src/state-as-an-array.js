import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RandomList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100,
      },
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<RandomList />, document.getElementById('root'));
