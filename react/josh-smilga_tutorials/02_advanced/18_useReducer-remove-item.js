/* Remove Item
- we´ll add two more actions: close modal function and remove item

Close Modal function
- we´re gonna call it after 3 seconds
- this closeModal function will be passed as Modal component prop so we also update Modal component file. */

// modal component
<Modal closeModal={closeModal} modalContent={state.modalContent} />;

// close modal function
const closeModal = () => {
  dispatch({ type: 'CLOSE_MODAL' });
};

// Modal file
import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;

/* Remove Item
- Similarly we could add a button to our items to remove them individually
- so we add button with the new dispatch in the onClick property and in reducer we copy the state.people filtering the value that is equal to person_id */

// button
<button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>
  remove
</button>;

// reducer
if (action.type === 'REMOVE_ITEM') {
  const newPeople = state.people.filter(
    (person) => person.id !== action.payload
  );
  return { ...state, people: newPeople };
}

/* 
- finally, as reducer usually occupy a lot of space we move it to another file */

export const reducer = (state, action) => {}

import {reducer} from './reducer'
