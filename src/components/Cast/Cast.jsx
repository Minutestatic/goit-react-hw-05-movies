import { fetchCredits } from 'helpers/api';
import { useEffect, useState } from 'react';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);

  useEffect(() => {
    fetchCredits(movieId)
      .then(result => {
        console.log(result);
        setCast(result);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error.message);
      });
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map(cas => {
          return (
            <li key={cas.id}>
              <img
                src={
                  cas.profile_path &&
                  `https://image.tmdb.org/t/p/w200${cas.profile_path}`
                }
                alt="{cas.name}"
              />
              <p>{cas.name}</p>
              <p>Character: {cas.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Cast;
