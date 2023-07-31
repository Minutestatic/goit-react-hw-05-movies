import { useEffect, useState } from 'react';
import { fetchReviews } from 'helpers/api';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(result => {
        setReviews(result);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error.message);
      });
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.length ? (
          reviews.map(review => {
            return (
              <li>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>not reviews </p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
