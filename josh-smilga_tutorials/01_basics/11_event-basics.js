/* event basics
- realated for user events, for example. click a button, hover over card.
- to work with events we´ll have the event atribute and the eventHandler
- onClick, onMouseOver

- we can work the handler with a reference or an inline function */

const Book = ({ img, title, author }) => {
  // reference example
  const clickHandler = () => {
    alert('hello world');
  };

  return (
    <article className='book'>
      <img src={img} alt='' />
      {/* // inline example */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
    </article>
  );
};

/* passing values
- how do we do when we want to pass some kind of value?
- in the example, if we must pass in the argument to the function in the event this event will be called right away.
- to solve this, we have to create an arrow function and pass inside the function with the argument. */

const complexExample = (author) => {
  console.log(author);
};

// instead of this
<button type='button' onClick={complexExample(author)}>
  more complex example
</button>;

// we pass this
<button type='button' onClick={() => complexExample(author)}>
  more complex example
</button>;

// one important thing is that in al the functions, in the events handlers we can access the event object

const Book = ({ img, title, author }) => {
  // reference example
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  // inline example
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

// onMouseHover with the section
<article
  className='book'
  onMouseOver={() => {
    console.log(title);
  }}
></article>;
