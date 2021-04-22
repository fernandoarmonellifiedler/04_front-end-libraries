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

  const handleAdd = (e) => {
    console.log(e.target.textContent);
    let stateName = e.target.value;
    if (stateName === 'volume') {setVolume((volume) => volume + 1)};
    if (stateName === 'bass') setBass((bass) => bass + 1);
    if (stateName === 'mid') setMid((mid) => mid + 1);
    if (stateName === 'treble') setTreble((treble) => treble + 1);
  };

  const handleMin = (e) => {
    let stateName = e.target.value;
    if (stateName === 'volume') setVolume((volume) => volume - 1);
    if (stateName === 'bass') setBass((bass) => bass - 1);
    if (stateName === 'mid') setMid((mid) => mid - 1);
    if (stateName === 'treble') setTreble((treble) => treble - 1);
  };

  return (
    <>
      <div>
        <p>VOLUME</p>
        <button value='volume' onClick={handleMin}>
          -
        </button>{' '}
        {volume}{' '}
        <button value='volume' onClick={handleAdd} >
          +
        </button>
      </div>
      <div>
        <p>BASS</p>
        <button value='bass' onClick={handleMin}>
          -
        </button>{' '}
        {bass}{' '}
        <button value='bass' onClick={handleAdd}>
          +
        </button>
      </div>
      <div>
        <p>MID</p>
        <button value='mid' onClick={handleMin}>
          -
        </button>{' '}
        {mid}{' '}
        <button value='mid' onClick={handleAdd}>
          +
        </button>
      </div>
      <div>
        <p>TREBLE</p>
        <button value='treble' onClick={handleMin}>
          -
        </button>{' '}
        {treble}{' '}
        <button value='treble' onClick={handleAdd}>
          +
        </button>
      </div>
    </>
  );
}

ReactDOM.render(<AudioControls />, document.getElementById('root'));
