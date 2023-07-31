import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Details.module.css';
import movieImg from './movieImg.jpg';

const Details = ({
  movie: { title, poster_path, vote_average, overview, genres },
}) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <div className={css.container}>
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : movieImg
          }
          alt=""
          width={250}
          height={400}
        />

        <div>
          <h1 className={css.title}>{title}</h1>
          <p className={css.text}>User Score: {vote_average}</p>

          <h2 className={css.title}>Overview</h2>
          <p className={css.text}>{overview}</p>

          <h2 className={css.title}>Genres</h2>
          <ul>
            {genres &&
              genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Details;
