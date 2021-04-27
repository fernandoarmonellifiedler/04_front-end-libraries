/* Multiple Inputs
- we´re gonna add one more but you can have many many different inputs
- we´re gonna refactor the previous example
- instead of having multiple state values we can have only one
- same in the case of the handler, we can have only one function that is responsible for the onChange

------------------------------
One State value
- we create this state value
const [person, setPerson] = useState({firstName: '', email: '', age: ''})

- now, we can reference the person using dot notation (person.firstName, person.email, person.age)

------------------------------
The handler
- with the functions, we will flip it over to the submit button
- in onChange we add {handleChange} and in the button a handleSubmit

- we´re gonna run the handleChange regardless of the input and get those values depending on what input i´m changing
- also we want to affect the person
- we want name and value properties to work with in the handleChange

const name = e.target.name;
const value = e.target.value;

- now that we know name and value we can use the dinamyc object properties */

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name; // it changes dinamically
    const value = e.target.value;
    setPerson({...person, [name]: value}) // equal to firstName: value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

// - now, in the handleSubmit we check if firstName, email and age exist. if exist we create a newPerson with all those values and we add an id too.

const handleSubmit = (e) => {
  e.preventDefault();
  if (person.firstName && person.email && person.age) {
    const newPerson = {...person, id: new Date().getTime().toString()}
  }
};

// - finally we add person to setPeople and person back to an empty string

const handleSubmit = (e) => {
  e.preventDefault();
  if (person.firstName && person.email && person.age) {
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people.newPerson]);
    setPerson({ firstName: '', email: '', age: '' });
  }
};