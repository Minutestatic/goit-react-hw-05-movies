const Movie = ({ movie: { title, poster_path, vote_average } }) => {
  return (
    <>
      <h1>{title}</h1>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <p>User Score: {vote_average}</p>
      <h2>Overview</h2>
      <p></p>
    </>
  );
};
export default Movie;
