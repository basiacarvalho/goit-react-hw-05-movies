import css from './Home.module.css';

const Home = () => {
  return (
    <main>
      <div className={css.trendingContainer}>
        <h2 className={css.trendingTitle}>Trending today</h2>
        <ul className={css.trendingList}>
          <li className={css.trendingListItem}>Moj trending movie</li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
