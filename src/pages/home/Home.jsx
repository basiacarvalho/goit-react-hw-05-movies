import css from './Home.module.css';
import { fetchTrendingMovies } from 'utils';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <div className={css.container}>
        <h2 className={css.title}>Trending today</h2>
        <ul className={css.list}>
          {trendingMovies.map(el => (
            <li key={el.id} className={css.listItem}>
              <Link to={`/movies/${el.id}`} className={css.link}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
