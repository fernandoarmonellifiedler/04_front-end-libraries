import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RandomList() {
  const [randomNums, setRandomNums] = useState([]);

  const handleClick = () => {
    let newNum = Math.random() * 100;
    setRandomNums([...randomNums, newNum]);
  };

  return (
    <>
      <button onClick={handleClick}>Add Random Number</button>
      <ul>
        {randomNums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<RandomList />, document.getElementById('root'));