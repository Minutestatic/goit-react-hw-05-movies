import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   useEffect(() => {
  //     // HTTP zapros '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
  //   }, []);
  //   console.log(movieId);
  return (
    <>
      <h1>сторінка з детальною інформацією про кінофільм: {movieId}</h1>
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
