/* Prop drilling
- is not an official term. it´s somewhat of the side effect when you have multiple components and a big component state, and you need to pass some component state from the top component all the way to the bottom of your component
- we see this now to learn about useContext on the next lesson

- for the example, we will setup a list component and a button to remove the item. it´s a repetition
- so, by now we have four components (data, PropDrilling, List and SinglePerson).
  - PropDrilling returns List component with the people array as props
  - List destructures this array and for each one of the elements inside returns a SinglePerson component with his unique id
  - Lastly, SinglePerson destructures the list element (his id and name) and returns a single item
*/

import React, { useState } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <div className='item'>
      <h4>single item</h4>
    </div>
  );
};

export default PropDrilling;

/* 
- now we want to set up a function that deletes an item from the list. this function goes in PropDrilling component. but, were we use it? we want to use it in the SinglePerson component

const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });

- first, we need to pass in into the List as a prop
- then destructure it inside List component
- the, pass it as prop in SinglePerson component and eventually use it inside the SinglePerson component

- this is were prop drilling comes. we need to pass this function along a bunch of components from top to bottom
- List component does not need removePerson function but in order to make it available in the SinglePerson component we have to pass it as a prop to the component
- context API is usefull for this scenario were whe can avoid this prop drilling
*/

import React, { useState } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
