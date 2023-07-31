import css from './Search.module.css';
const Search = ({ onSubmit }) => {
  let queryValue = '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    queryValue = form.elements.query.value;
    onSubmit(queryValue);
    form.reset();
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          defaultValue={queryValue}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
};
export default Search;
