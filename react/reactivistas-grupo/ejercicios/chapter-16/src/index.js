import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// controlled input
const InputExample = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='input-content'>
      <label htmlFor='text'>Controlled Input</label>
      <input type='text' id='text' value={text} onChange={handleChange} />
      <p>Estado: {text}</p>
    </div>
  );
};

// Tricky input
const TrickyInput = () => {
  const [text, setText] = useState('try typing something');

  const handleChange = (event) => {
    setText('haha nope');
  };

  return (
    <div className='input-content'>
      <label htmlFor='text'>Tricky Input</label>
      <input type='text' id='text' value={text} onChange={handleChange} />
      <p>Estado: {text}</p>
    </div>
  );
};

// No numbers input
const NoNumbersInput = () => {
  const [text, setText] = useState('No numbers!');
  const handleChange = (event) => {
    let text = event.target.value;
    setText(text.replace(/[0-9]/g, ''));
  };
  return (
    <div className='input-content'>
      <label htmlFor='text'>NoNumbersInput</label>
      <input type='text' id='text' value={text} onChange={handleChange} />
      <p>Estado: {text}</p>
    </div>
  );
};

// --------------------------------------------
// uncontrolled input
const EasyInput = () => {
  return (
    <div className='input-content'>
      <label htmlFor='text'>Uncontrolled Input</label>
      <input type='text' id='text' defaultValue='default value' />
      <p>Sin estado</p>
    </div>
  );
};

// get the value: onChange
const OnChangeInput = () => {
  const [text, setText] = useState('');

  return (
    <div className='input-content'>
      <label htmlFor='text'>Uncontrolled Input</label>
      <input
        type='text'
        id='text'
        onChange={(e) => setText(e.target.value)}
        // value={text}
      />
      <p>Estado: {text}</p>
    </div>
  );
};

// get the value: useRef
const RefInput = () => {
  const input = useRef();
  console.log(input);

  const handleChange = (e) => {
    console.log(e)
    console.log(input.current.value)
  }

  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  };
  return (
    <div className='input-content'>
      <label htmlFor='text'>useRef</label>
      <input type='text' ref={input} />
      <input type='text' onChange={handleChange} />
      <button onClick={showValue}>Alert the Value!</button>
      <p>Sin estado.</p>
    </div>
  );
};

ReactDOM.render(
  <>
    <div className='controlled-inputs'>
      <h1>Controlled Inputs</h1>
      <InputExample />
      <TrickyInput />
      <NoNumbersInput />
    </div>
    <div className='uncontrolled-inputs'>
      <h1>Uncontrolled Inputs</h1>
      <EasyInput />
      <OnChangeInput />
      <RefInput />
    </div>
  </>,
  document.getElementById('root')
);
