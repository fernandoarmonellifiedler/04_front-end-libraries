import React from 'react';
import ReactDom from 'react-dom';

// mini book project

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);
const Title = () => <h1>Dog Man: Grime and Punishment</h1>;
const Author = () => <h4>Dav Pilkey</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
