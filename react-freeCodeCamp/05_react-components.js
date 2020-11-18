/* Create a Stateless Functional Component
Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

// After being transpiled, the <div> will have a CSS class of 'customClass'

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.


Exercise: The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag. */

const MyComponent = function () {
    // Change code below this line
    return (
        <div>Text</div>
    )
    // Change code above this line
}


// =========================

/* Create a React Component
The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
This creates an ES6 class Kitten which extends the React.Component class. So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the Kitten class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as props.


Exercise: MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )
        // Change code above this line
    }
};