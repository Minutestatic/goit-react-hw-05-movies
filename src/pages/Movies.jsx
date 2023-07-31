import { useEffect, useState } from 'react';
import { fetchSearchForMovies } from 'helpers/api';
import { useSearchParams } from 'react-router-dom';

import Search from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) return;
    fetchSearchForMovies(query).then(res => setMovies([...res]));
  }, [query]);

  return (
    <section>
      <div className="container">
        <Search onSubmit={handleSubmit} />
        <MoviesList movies={movies} />
      </div>
    </section>
  );
};

export default Movies;
