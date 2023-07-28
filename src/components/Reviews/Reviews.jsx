const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  console.log(useParams());
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
