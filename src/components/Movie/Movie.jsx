const Movie = ({ movie: { title, poster_path } }) => {
  return (
    <>
      <h1>{title}</h1>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
    </>
  );
};
export default Movie;
