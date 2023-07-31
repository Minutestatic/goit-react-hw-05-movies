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
        {cast.length ? (
          cast.map(cas => {
            return (
              <li className={css.item} key={cas.id}>
                <h3 className={css.title}>{cas.name}</h3>

                <img
                  className={css.img}
                  src={
                    cas.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cas.profile_path}`
                      : `https://img1.freepng.ru/20180207/oyw/kisspng-silhouette-icon-blank-person-template-5a7b67b0e73ed2.7426018115180369129472.jpg`
                  }
                  alt={cas.name}
                  width={200}
                />

                <p>Character: {cas.character}</p>
              </li>
            );
          })
        ) : (
          <p>not Cast</p>
        )}
      </ul>
    </section>
  );
};
export default Cast;
