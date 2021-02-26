/* React Router - Intro
- when we talk about js frameworks we´re not talking about traditional html pages. instead, we have single-page apps with multiple paths that you can load without refreshing the entire url
- react doesn´t have built-in routing so we´re using the react router package

npm i react-router-dom

- we import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
- when working with react-router you usually wrap your whole app.in this particular case we wrap our index js */

const ReactRouterSetup = () => {
  return <Router>react router</Router>;
};

/*
- now we set up our routes. escencially means that when navigating you display that especific component ("pages" in this app)
- We have our main Route component (path "/") and inside we display wichever component that we want
- so we set this components as pages like this: */

const ReactRouterSetup = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/people'>
        <People />
      </Route>
    </Router>
  );
};

/*
- there´s an issue with the paths. they show also the Home component. that´s because React Router by default if the path matches it´s gonna display both components. this is fixed by adding another prop ('exact') to your main url. since there´s not nested pages we use it only in the main route
*/

/* ------------------------------------ 
React Router - Error
- if we write an inexistent path react it won´t display an error, just an empty page
- for this we have the Error component. The path is "*" to match all

<Route path="*">
  <Error />
</Route>

- but, because the "*" path matches all, we´ll have an error page displayed in place of Home or People. This is where the Switch component comes into place
*/

/*  ------------------------------------ 
React Router - Switch Component
- we add a Switch component inside Router and put all other components inside it
- with this, only the first component that matches is displayed
*/

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

/*  ------------------------------------ 
React Router - Links
- so, in order to navigate we add a Navbar. the only thing we need to do is to display it inside the Router component but outside of the Switch component
- inside the Navbar component file we´ll have a list that we´ll import from 'react-router-dom' with the specific name of Link
- it as also the 'to' prop where you place the path of the link
- we add also the Home link to error page
*/

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  );
};

/*   ------------------------------------ 
React Router - URL params and Placeholder
- how we can deal with the List?
- we´ll add some kind of placeholder page were we go when we click on one of the list items
- essencially we don´t have to create four different pages for each item. we can display the data of the selected list inside the placeholder by grabbing the item id or some identifier
- in the index.js we have the Person component so we´ll add Person component in the Route component also but the setup will be different.
  - it will have the URL parameter (/:id, /:name, etc) in the path. the first part is up to you, if you want to go with "/person/:id" or simply "/:id" for example
  - we don´t place the component in the Route component but inside its children prop.
- so, we´ll always show a Person component. the difference is that in the Person component we´ll grab that id and fetch that data

  <Route path='/person/:id' children={<Person />}></Route>

- in the people array (People component file). right next to heading 4 we add a Link
- since we are navigating in each item of the list we have access to the id so we have to set the 'to' prop dinamically inside the Link. we use curly braces and template strings
- Now, every time we open a person link we are still opening the person page with the difference of the id in the url
*/

{
  people.map((person) => {
    return (
      <div key={person.id} className='item'>
        <h4>{person.name}</h4>
        <Link to={`/person/${person.id}`}>Learn More</Link>
      </div>
    );
  });
}

/* 
- but how we can access that value? in the Person i´ll want to grab that value. in this case, look for the info in the data array imported in the Person component file (the placeholder)
note: generally you already fetch the info in the People.map and if you want to show another info like in this example, you fetch that data again. Here we are doing the second one.

- so, to access data values we use useParams hook from 'react-router-dom'
- since i´m getting back the object from useParams we can simply destructure the id
- we also wanto to set up some state value (name) to display this dinamically later
*/

const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  );
};

/* 
- since we have the id so we can set up the useEffect hook where we can filter from the data wich person has the id

useEffect(() => {
    const newPerson = data.find((person) => {
      
    })
  }, [])

- the problem is that person.id and id are not strictly equal, one is a number and the other a string so we use parseInt and then setName
*/

const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  );
};
