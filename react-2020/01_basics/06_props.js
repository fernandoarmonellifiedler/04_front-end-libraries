/* 
- Book is a function in js. we can pass paramethers (props)
- the function will access these props so we pass them where we are rendering the 'book'
- be sure that the prop that you´re passing matches the value that you´re looking in the component. in this case, make sure that all of the instances of Book have that 'job' prop
 */

// mini book project
function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

/* now we´re adding new data to our second book
- we create an object with the properties author, title and img
- this is not the only way. you can pass values with variables, objects, arrays, etc. */

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// setup vars
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
  title: 'Dog Man: Grime and Punishment',
  author: 'Dav Pilkey',
};
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
  title: 'The Deep End (Diary of a Wimpy Kid Book 15)',
  author: 'Jeff Kinney',
};

// mini book project
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));