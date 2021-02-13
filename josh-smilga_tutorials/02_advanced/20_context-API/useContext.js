/* Context API / useContext
- this hook will help us to resolve that previous issue
- first we´ll need to create the context. so, above the ContextAPI component we add

const PersonContext = React.createContext();

- the moment we do that we have access to two components: the Provider and the Consumer by using dot notation. e.g. PersonContext.Provider
- Provider works as a distributor
- we look for the root component (ContextAPI in this case) and return the Provider wrapping the whole component tree. in different projects it would wrap your whole application
- this is important because the Provider has the value prop where we can pass whatever we want. and also we can use useContext to access this value
- doing this we can pass any value to the rest of the component no matters its deep.

So: */

const PersonContext = React.createContext();

// root component
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value='hello world'>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

// child component
const SinglePerson = ({ id, name, removePerson }) => {
  const data = useContext(PersonContext) // useContext
  console.log(data);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

/* 
- in the example passing removePerson function we just add that function as an object in the provider 

<PersonContext.Provider value={{removePerson}}>

- and in the SinglePerson component, because we know that we´re receiving and object we destructure it right away

const {removePerson} = useContext(PersonContext)

- of course, we delete the function name of the previous prop drilling since it´s not necessary anymore

- finally, as we know that we can pass any value we can add people also to the provider and delete it from the prop that is passed to the List component on our root component and use useContext inside List component. 
- without destructuring the object we can access people inside it with dot notation, of course. So the provider is:

<PersonContext.Provider value={{ removePerson, people }}>

and the List component: */

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};