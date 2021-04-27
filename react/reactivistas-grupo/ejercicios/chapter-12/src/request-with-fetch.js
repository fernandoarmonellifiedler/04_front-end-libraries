// API request with fetch

fetch(`http://www.reddit.com/r/reactjs.json`)
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Request failed')
  })
  .then(json => {
    const posts = json.data.children.map(
      obj => obj.data
    )
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  });
