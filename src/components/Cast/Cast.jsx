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
    <>
      <p>
        компонент Cast, інформація про акторський склад. Рендериться на сторінці
      </p>
      <p>Cast:{}</p>
    </>
  );
};
export default Cast;
