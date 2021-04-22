import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<RefInput/>, document.getElementById('root'));
