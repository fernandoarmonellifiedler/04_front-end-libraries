import React from 'react';
import ReactDOM from 'react-dom';

// function HelloWorld() {
//   return (
//     <div>Hello World!</div>
//   )
// }
// ------------------------
// compiled into JS
// function HelloWorld() {
//   return React.createElement('div', {}, 'Hello World!');
// }
// ------------------------
// function HelloWorld() {
//   return (
//     <div>
//       <Hello />
//       <World />
//     </div>
//   )
// }
// function Hello() {
//   return (
//     <span>Hello</span>
//   )
// function World() {
//   return (
//     <span>World!</span>
//   )
// }
// ------------------------
// function ValidIndicator() {
//   const isValid = true;
//   return (
//     <span>{isValid ? 'valid' : 'not valid'}</span>
//   )
// }
// ------------------------
function ValidIndicator() {
  const isValid = true;
  return (
    <span>
      {isValid && 'valid'}
      {!isValid && 'not valid'}
    </span>
  )
}

ReactDOM.render(
  // <HelloWorld />,
  <ValidIndicator/>,
  document.querySelector('#root')
)