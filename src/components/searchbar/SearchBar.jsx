import css from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <form className={css.form} onSubmit={''}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchQuery"
      ></input>
      <button type="submit" className={css.button}>
        <span className={css.buttonLabel}>Search</span>
      </button>
    </form>
  );
};
