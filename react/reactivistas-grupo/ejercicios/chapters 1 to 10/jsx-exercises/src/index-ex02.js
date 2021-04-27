// 2. See how JSX interprets whitespace. Try rendering these arrangements and take note of the output (hint: leading and trailing spaces are removed, and so are newlines):

import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return (
    <>
      {/* <div>
        Newline

        
        Test
      </div> */}
      <div>Line1 Line2</div>
    </>
  );
}

ReactDOM.render(<MyThing />, document.querySelector('#root'));
