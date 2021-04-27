import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const calculate = (name, tempValue) => {
  if (name === 'celsius') {
    return (tempValue - 32) * (5 / 9);
  }
  if (name === 'fahrenheit') {
    return tempValue * (9 / 5) + 32;
  }
};

// Parent
function Converter() {
  const [temp, setTemp] = useState({
    celsius: '',
    fahrenheit: '',
  });

  // useEffect(() => {
  //   setTemp({
  //     ...temp, [name]: e.target.value
  //   })
  // },[temp.celsius])

  // useEffect(() => {
  //   ...temp,
  // },[temp.fahrenheit])

  const handleChange = (e, name, otherName,value) => {
    setTemp({ [name]: e.target.value, [otherName]: value });
  };

  return (
    <form>
      <Temperature
        name={'celsius'}
        otherName={'fahrenheit'}
        value={temp.fahrenheit}
        otherValue={temp.celsius}
        handleChange={handleChange}
      />
      <Temperature
        name={'fahrenheit'}
        otherName={'celsius'}
        value={temp.celsius}
        otherValue={temp.fahrenheit}
        handleChange={handleChange}
      />
    </form>
  );
}

// Children
function Temperature({ name, value, handleChange, otherValue, otherName }) {
  let result = value ? Math.round(calculate(name, value)) : otherValue;

  return (
    <>
      <label htmlFor='temp'>{name}</label>
      <input
        type='text'
        id='temp'
        onChange={(e) => handleChange(e, name, otherName, value)}
        value={result}
      />
    </>
  );
}

ReactDOM.render(<Converter />, document.querySelector('#root'));
