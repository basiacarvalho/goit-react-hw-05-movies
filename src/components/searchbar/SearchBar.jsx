import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

export const SearchBar = ({ handleSubmit }) => {
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieName"
        ></input>
        <button type="submit" className={css.button}></button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};
