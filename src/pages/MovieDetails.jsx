import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchMovieDetails } from '../helpers/api';
import { useEffect, useState } from 'react';

import Movie from 'components/Movie/Movie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(result => {
        setMovie(result);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error.message);
      });

    // HTTP zapros '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
  }, [movieId]);
  return (
    <>
      <Movie movie={movie} />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
