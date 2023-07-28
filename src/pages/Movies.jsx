// import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Movies = () => {
  //   useEffect(() => {
  //     // HTTP zapros /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
  //   }, []);
  return (
    <>
      <h1>сторінка пошуку кінофільмів за ключовим словом.</h1>
      {['mov-1', 'mov-2', 'mov-3'].map(mov => {
        return (
          <Link key={mov} to={`${mov}`}>
            {mov}
          </Link>
        );
      })}
    </>
  );
};

export default Movies;
