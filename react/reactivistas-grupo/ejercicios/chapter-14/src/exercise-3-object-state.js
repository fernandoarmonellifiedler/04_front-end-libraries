/* Exercise 3:
Create a component called AudioControls with 4 pieces of state: “volume”, “bass”, “mid", and ”treble”, each storing a value between 1 and 100. The app should look something like this:

            VOLUME
            - 89 +
            TREBLE
            - 32 +
              BASS
            - 50 +
              MID
            - 41 +

Display each value along with a label and a pair of +/- buttons for increasing and decreasing the value.

Make two separate versions of this component: In the first, store the values in their own individualuseStatevariables. In the second, store the values together in one state variable, an object that lookslike this:{volume:<number>,bass:<number>,mid:<number>,treble:<number>} */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AudioControls() {
  const [controlls, setControlls] = useState({
    volume: 50,
    bass: 50,
    mid: 50,
    treble: 50,
  });

  const handleClick = (e) => {
    let stateName = e.target.value;
    let sumOrMin = e.target.textContent;

    if (sumOrMin === '+') {
      setControlls({ ...controlls, [stateName]: controlls[stateName] + 1 });
    }
    if (sumOrMin === '-') {
      setControlls({ ...controlls, [stateName]: controlls[stateName] - 1 });
    }
  };

  return (
    <>
      {Object.keys(controlls).map((item, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <p>{item}</p>
          <button value={item} onClick={handleClick}>
            -
          </button>{' '}
          {controlls[item]}{' '}
          <button value={item} onClick={handleClick}>
            +
          </button>
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<AudioControls />, document.getElementById('root'));
