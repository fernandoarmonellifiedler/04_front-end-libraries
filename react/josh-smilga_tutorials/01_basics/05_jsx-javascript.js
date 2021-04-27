// we´ll add all the elements of book inside the 'book' article directly and add inline CSS to the CSS file
// always pass values inside curly braces

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// mini book project
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'Dog Man: Grime and Punishment';
  const author = 'Dav Pilkey';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

/* on CSS:
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
*/