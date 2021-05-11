// 07_Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((e) => console.log(e));

// 08_async/await
const obtenerUsuario = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await res.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
};

obtenerUsuario();

// 09_map
const datos = [
  {nombre: 'Manuel', edad: 47},
  {nombre: 'Francisca', edad: 27},
  {nombre: 'Roberto', edad: 54},
  {nombre: 'Fran', edad: 13},
]

datos.forEach(item => {
  console.log(item);
})

datos.map(item => {
  console.log(item);
})