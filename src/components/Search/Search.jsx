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
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={queryValue} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default Search;
