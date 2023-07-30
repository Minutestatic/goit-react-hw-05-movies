import { useEffect, useState } from 'react';
import { fetchReviews } from 'helpers/api';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetchReviews(movieId)
      .then(result => {
        console.log(result);
        setReviews(result);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error.message);
      });
  }, [movieId]);
  //   useEffect(() => {
  //     // HTTP /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
  //   }, []);
  return (
    <>
      <p>компонент Reviews, інформація про огляди. Рендериться на сторінці</p>
      <p>Reviews:{movieId}</p>
    </>
  );
};

export default Reviews;
