import css from './Movies.module.css';
import { FormPreviousLink } from 'grommet-icons';

const Movies = () => {
  return (
    <main>
      <div className={css.moviesContainer}>
        <button className={css.moviesButton}>
          <FormPreviousLink color="black" />
          Go back
        </button>
      </div>
    </main>
  );
};

export default Movies;
