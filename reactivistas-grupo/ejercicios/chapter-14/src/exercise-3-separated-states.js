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
  const [volume, setVolume] = useState(50);
  const [bass, setBass] = useState(50);
  const [mid, setMid] = useState(50);
  const [treble, setTreble] = useState(50);
  

  const handleClick = (e) => {
    let stateName = e.target.value;
    let sumOrMin = e.target.textContent;

    if (sumOrMin === '+') {
      if (stateName === 'VOLUME') setVolume((volume) => volume + 1);
      if (stateName === 'BASS') setBass((bass) => bass + 1);
      if (stateName === 'MID') setMid((mid) => mid + 1);
      if (stateName === 'TREBLE') setTreble((treble) => treble + 1);
    }
    if (sumOrMin === '-') {
      if (stateName === 'VOLUME') setVolume((volume) => volume - 1);
      if (stateName === 'BASS') setBass((bass) => bass - 1);
      if (stateName === 'MID') setMid((mid) => mid - 1);
      if (stateName === 'TREBLE') setTreble((treble) => treble - 1);
    }
  };

  return (
    <>
      {['VOLUME', 'BASS', 'MID', 'TREBLE'].map((item, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <p>{item}</p>
          <button value={item} onClick={handleClick}>
            -
          </button>{' '}
          {index === 0
            ? volume
            : index === 1
            ? bass
            : index === 2
            ? mid
            : index === 3
            ? treble
            : ''}{' '}
          <button value={item} onClick={handleClick}>
            +
          </button>
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<AudioControls />, document.getElementById('root'));
