import css from './Home.module.css';

import { TrendingMovieList } from 'components/trendingmovielist/TrendingMovieList';

const Home = () => {
  return (
    <main className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <TrendingMovieList />
    </main>
  );
};

export default Home;
