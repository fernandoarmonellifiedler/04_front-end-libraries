import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// setup vars
const books = [
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

// mini book project
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
