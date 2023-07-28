const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  //   useEffect(() => {
  //     // HTTP zapros /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
  //   }, []);

  return (
    <>
      <p>
        компонент Cast, інформація про акторський склад. Рендериться на сторінці
      </p>
      <p>Cast:{movieId}</p>
    </>
  );
};
export default Cast;
