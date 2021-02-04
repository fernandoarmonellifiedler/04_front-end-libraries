/* key prop
- react need to track changes (adding or removing components)
- so we need to add a special key prop in each and every item that we´re returning. generally, an id key found on an array of objects
*/
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    title: 'Dog Man: Grime and Punishment',
    author: 'Dav Pilkey',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}
