import css from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchForMovies } from 'utils';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (movieName === null) return;

    async function fetchMoviesByName() {
      const results = await searchForMovies(movieName);
      console.log(results);
      setSearchResults(results);
    }

    fetchMoviesByName();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
    form.reset();
  };

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
      <ul className={css.searchMovieList}>
        {searchResults.map(el => (
          <li key={el.id} className={css.searchMovieListItem}>
            <Link to={`/movies/${el.id}`} className={css.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
