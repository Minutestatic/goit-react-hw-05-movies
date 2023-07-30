import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          title && (
            <li key={id}>
              <Link
                to={{ pathname: `/movies/${id}` }}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default MoviesList;
