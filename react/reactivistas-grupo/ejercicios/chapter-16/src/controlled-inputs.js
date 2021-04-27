import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// controlled input
const InputExample = () => {
  const [text, setText] = useState('');

  consthandleChange = (event) => {
    setText(event.target.value);
  };

  return <input type='text' value={text} onChange={handleChange} />;
};

// Tricky input
const TrickyInput = () => {
  const [text, setText] = useState('try typing something');
  const handleChange = (event) => {
    setText('haha nope');
  };
  return <input type='text' value={text} onChange={handleChange} />;
};

// No numbers input
const NoNumbersInput = () => {
  const [text, setText] = useState('try typing something');
  const handleChange = (event) => {
    let text = event.target.value;
    setText(text.replace(/[0-9]/g, ''));
  };
  return <input type='text' value={text} onChange={handleChange} />;
};

ReactDOM.render(
  <>
    <InputExample />
    <TrickyInput />
    <NoNumbersInput />
  </>,
  document.getElementById('root')
);
