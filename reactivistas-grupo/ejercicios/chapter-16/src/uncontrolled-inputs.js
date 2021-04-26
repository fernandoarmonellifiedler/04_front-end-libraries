import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// uncontrolled input
const EasyInput = () => {
  return (
    <>
      <label htmlFor='text'>Uncontrolled Input</label>
      <input type='text' id='text' defaultValue='default value' />
    </>
  );
};

// get the value: onChange
const OnChangeInput = () => {
  const [text, setText] = useState('');
  return (
    <>
      <label htmlFor='text'>Uncontrolled Input</label>
      <input
        type='text'
        id='text'
        onChange={(e) => setText(e.target.value)}
        value={text + '!'}
      />
    </>
  );
};

// get the value: useRef
const RefInput = () => {
  const input = useRef();
  
  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  };
  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={showValue}>Alert the Value!</button>
    </div>
  );
};

ReactDOM.render(
  <>
      <h1>Uncontrolled Inputs</h1>
      <EasyInput />
      <OnChangeInput />
      <RefInput/>
  </>,
  document.getElementById('root')
);