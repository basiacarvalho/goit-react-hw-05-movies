import { Link } from 'react-router-dom';
import css from './TrendingMovieList.module.css';
import { fetchTrendingMovies } from 'utils';
import { useState, useEffect } from 'react';

export const TrendingMovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    }
    fetchMovies();
  }, []);

  return (
    <ul className={css.list}>
      {trendingMovies.map(el => (
        <li key={el.id} className={css.listItem}>
          <Link to={`/movies/${el.id}`} className={css.link}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
