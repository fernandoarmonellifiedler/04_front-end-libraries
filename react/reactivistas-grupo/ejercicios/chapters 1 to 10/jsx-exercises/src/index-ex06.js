// 6. The HTML spec says that tables must be structured with a table element surrounding a tbody,
// which surrounds multiple trs (the rows), which each surround multiple tds (the columns). Create a component called Table that renders a table with 1 row and 3 columns and any data you
// like. Open the browser console and make sure there are no warnings. Then, create a component
// called Data that renders the 3 columns, and replace the 3 <td>s with the <Data/> component.

import React from 'react';
import ReactDOM from 'react-dom';

function Table() {
  
  return (
    <>
      
    </>
  );
}

ReactDOM.render(<Table />, document.querySelector('#root'));
