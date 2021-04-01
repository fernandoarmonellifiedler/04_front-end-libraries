// 1. Create a component that renders this JSX:

import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return (
    <>
      <div className='book'>
        <div className='title'>The Title</div>
        <div className='author'>The Author</div>
        <ul className='stats'>
          <li className='rating'>5 stars</li>
          <div className='isbn'>12-345687-910</div>
        </ul>
      </div>
    </>
  );
}

ReactDOM.render(<MyThing />, document.querySelector('#root'));
