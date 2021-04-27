/* Add Item
- in order to affect anything in ur state we´ll need to dispatch. we´ll do it in the conditional if the name it´s true
- we call dispatch function with an object as argument.
- in the object we always pass a property with the name of "type", that´s our action. it´s good practice to pass a name in uppercase.
- in the reducer function we handle with that action
note: always return some kind of state or this functionality it wont work

- so we have state and action. we can go with the conditional now and check wheter we are dispatching the action with the type of TESTING
- basically, we set up our dispatch function with our action object where we set up type property with the value of 'TESTING'. in reducer we catch them.
- note that we´re not directly affecting state values.

- in reducer, if action is TESTING, we copy our state and add some values manually. */

const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  return state;
};

// - we can throw an error if the action that we pass does not match TESTING type
throw new Error('no matching action type');

/*
- now, instead of TESTING we´re gonna write ADD_ITEM

- people it won´t return just a data. this is were we´re gonna add the value to the empty array of the initial state "defaultState"

Passing data to people array:
- we do it by passing more properties to the action object in dispatch */

const handleSubmit = (e) => {
  e.preventDefault();
  if (name) {
    const newItem = {id: new Date().getTime().toString(), name}
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setName('');
  } else {
    dispatch({type:'RANDOM'})
  }
};


// - now, in reducer we´re not only checking for the time but for the payload too.
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  throw new Error('no matching action type');
};


// - now we´re gonna dispatch a new action, a no-value action that showcase if the name is empty
if (name) {
  const newItem = { id: new Date().getTime().toString(), name };
  dispatch({ type: 'ADD_ITEM', payload: newItem });
  setName('');
} else {
  dispatch({ type: 'NO_VALUE' });
}

// and in reducer
if (action.type === 'NO_VALUE') {
  return {...state, isModalOpen: true, modalContent: 'please enter value'}
}

// So, by now our code looks like this

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
// reducer function
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  throw new Error('no matching action type');
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
