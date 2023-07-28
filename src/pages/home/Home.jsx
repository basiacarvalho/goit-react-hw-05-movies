import css from './Home.module.css';

import { TrendingMovieList } from 'components/trendingmovielist/TrendingMovieList';

const Home = () => {
  return (
    <main>
      <div className={css.container}>
        <h2 className={css.title}>Trending today</h2>
        <TrendingMovieList />
      </div>
    </main>
  );
};

export default Home;
