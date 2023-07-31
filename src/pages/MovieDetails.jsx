import { Outlet, useParams } from 'react-router';
import { fetchMovieDetails } from '../helpers/api';
import { Suspense, useEffect, useState } from 'react';

import Details from 'components/Details/Details';
import DetailsList from 'components/DetailsList/DetailsList';

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
  }, [movieId]);

  return (
    <section>
      <div className="container">
        <Details movie={movie} />
        <DetailsList />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};
export default MovieDetails;
