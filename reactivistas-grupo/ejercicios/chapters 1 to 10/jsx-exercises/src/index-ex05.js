// 5. One good way to learn a new syntax is to try breaking it – discover its boundaries. Try some
// of the things this chapter warned about and see what kind of errors you get. At the very least,
// it’ll familiarize you with what the errors mean if you make one of these mistakes later on.
// a. Name a component starting with a lowercase letter, like “testComponent”.
// b. Try returning 2 elements at once
// c. Try returning an array with 2 elements inside
// d. Can you put 2 expressions inside single braces, like {x && 5; x && 7}?
// e. What happens if you use return inside a JS expression?
// f. What about a function call like alert('hi')? Does it halt rendering?
// g. Try putting a quoted string inside JSX. Does it strip out the quotes?

import React from 'react';
import ReactDOM from 'react-dom';

function Testing() {
 
  return (
    <>
    
    </>
  )
}

ReactDOM.render(<Testing />, document.querySelector('#root'));
