import { useEffect, useState } from 'react';
import { fetchFavoriteMovies } from 'helpers/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies()
      .then(result => {
        setMovies(result);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error.message);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </div>
    </section>
  );
};

export default Home;
