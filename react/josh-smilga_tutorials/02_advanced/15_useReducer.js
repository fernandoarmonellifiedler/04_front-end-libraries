/* useReducer
- is used whenever we have a more complicated setup as part of the state
- it will give more structure to your state on more complicated projects
- first, we will setup as usual and then refactor to use reducer

----------------------------
useState Setup
- we add state values for people and modal. modal will show up when we add a new value
- so first we creck modal state ( {showModal && <Modal />} ) and then create the handlers and so on

in the handleSubmit:
- preventDefault
- conditional depending on name be a true value (not empty)
- if modal true, we setPeople to the same array plus new people that is an object with name equal to name.
- finally we setName to empty string

- next we iterate over people data to show the list

this is the scenario using state values: */

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
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
      {people.map((person) => {
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
