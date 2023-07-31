import { fetchCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCredits(movieId)
      .then(result => {
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
            <li className={css.item} key={cas.id}>
              <h3 className={css.title}>{cas.name}</h3>
              {cas.profile_path ? (
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`}
                  alt={cas.name}
                />
              ) : (
                <></>
              )}

              <p>Character: {cas.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Cast;
