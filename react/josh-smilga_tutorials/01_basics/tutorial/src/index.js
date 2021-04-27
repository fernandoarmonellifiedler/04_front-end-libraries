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
