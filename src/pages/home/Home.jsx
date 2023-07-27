import css from './Home.module.css';
import { fetchTrendingMovies } from 'utils';
import { useState, useEffect } from 'react';

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
      <div className={css.trendingContainer}>
        <h2 className={css.trendingTitle}>Trending today</h2>
        <ul className={css.trendingList}>
          {trendingMovies.map(el => (
            <li key={el.id} className={css.trendingListItem}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
