const searchBtn = document.getElementById('search-btn');
const movieResults = document.getElementById('movie-results');

searchBtn.addEventListener('click', () => {
    const movieSearch = document.getElementById('movie-search').value;

    // Replace 'YOUR_API_KEY' with your actual API key
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=bb3b8436a679a32628ff0983e178d23a&query=${movieSearch}`)
        .then(response => response.json())
        .then(data => {
            movieResults.innerHTML = '';
            data.results.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                
                movieCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    <h2 class="movie-title">${movie.title}</h2>
                `;
                movieResults.appendChild(movieCard);
            });
        })
        .catch(error => console.error(error));
});