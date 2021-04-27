// Exercise 1:
// Create a Room component with a “lightswitch” button and some text describing “The room is lit” or “The room is dark”. Clicking the button should toggle the light on and off, and update the text. Use the useState hook to store the lightswitch state.
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Room() {
  const [light, setLight] = useState(true);
  
  const handleSwitch = () => {
    setLight(!light);
  }

  return (
    <>
      <p>{light ? "The room is lit" : "The room is dark"}</p>
      <button onClick={handleSwitch}>Toggle ON/OFF</button>
    </>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
