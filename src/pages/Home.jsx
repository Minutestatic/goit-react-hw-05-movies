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
    <>
      <h1>Список популярних кінофільмів</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
