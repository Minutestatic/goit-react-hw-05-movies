import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movie = ({
  movie: { title, poster_path, vote_average, overview, genres },
}) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  console.log(backLinkRef);
  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <h1>{title}</h1>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <p>User Score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Movie;
