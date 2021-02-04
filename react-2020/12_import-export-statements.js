/* Import and export statements
- this is not react especifics. they are es6 modules
- we´ll split code to make it simpler to read it
- we can move books array to another file and export it from there
- we have the named export and default export
- in default export you can have only one element exported and when importing we can put any name that we want
*/

// named export from file 'books.js'
export const data = [{}];
//name import from 'index.js'
import { data } from './books'; // names has to match

// default export from file 'Book.js'
export default Book;
//name import from 'index.js'
import Book from './Book';

// so now index.js looks like this
import React from 'react';
import ReactDom from 'react-dom';
import { data } from './books';
import Book from './Book';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

// Book.js
import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
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

export default Book;

// and we have books array in books.js
export const data = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    title: 'Dog Man: Grime and Punishment',
    author: 'Dav Pilkey',
  },

  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
    title: 'The Deep End (Diary of a Wimpy Kid Book 15)',
    author: 'Jeff Kinney',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71j7cagqC8L._AC_UL200_SR200,200_.jpg',
    title: 'Human Body Activity Book for Kids',
    author: 'JPh.D.',
  },
];
