const listMovies = document.getElementById('list_movies');

const fetchMovies = async () => {
  try {
    const response = await fetch('https://swapi-api.hbtn.io/api/films/?format=json');
    const data = await response.json();

    for (const movie of data.results) {
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      listMovies.appendChild(listItem);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

fetchMovies();
