import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          title && (
            <li key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>{title}</Link>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default MoviesList;
