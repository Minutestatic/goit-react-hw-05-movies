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

  return (
    <section>
      <ul>
        {reviews.map(review => {
          return (
            <li>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
