/* Refactor
- on a project like this, small, reducer will no be too necessary but as the project grows we want to access state values from a unique path

refactoring:
- remove people and showModal and we add 'const [ state, dispatch] = useReducer'
- reducer returns two things back: state value and dispatch function
- the difference with useState is that every time you want to do something with that host(?) state you ALWAYS gonna use dispatch and it´s gonna go thru the reducer

- in the useReducer function we pass the reducer function. this will take the old state and takes in something called "action" and spits back that useState. the second argument will be an object with a default state

- eventually we´ll move this into a separate file
- so, reducer function is just a simple function that we declare outside our main component. it has state and action arguments */

const reducer = (state, action) => {};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  //...
};

/* 
- we refactor al showModal and setShowModal. we´re it was showModal now there´s the state of useReducer. so, instead of this
{showModal && <Modal />}
we have
{state.isModalOpen && <Modal />}

or were we have
{people.map((person) => {... 
we have
{state.people.map((person) => {... 

- modal component will have modalContent prop and then we work a little bit on it

- so we have a state, which is an object with multiple properties that will be updated once we call dispatch */

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
// reducer function
const reducer = (state, action) => {};
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
    } else {
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
