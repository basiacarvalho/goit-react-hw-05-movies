import css from './MovieDetails.module.css';
import { FormPreviousLink } from 'grommet-icons';

const MovieDetails = () => {
  return (
    <main>
      <div className={css.moviesContainer}>
        <button className={css.moviesButton}>
          <FormPreviousLink color="black" />
          Go back
        </button>
        <div className={css.movieContainer}>MOVIE</div>
        <div className={css.additionalInfoMovieContainer}>
          <p className={css.additionalInfoMovieTitle}>Additional information</p>
          <ul className={css.additionalInfoMovieList}>
            <li className={css.additionalInfoMovieListItem}>Cast</li>
            <li className={css.additionalInfoMovieListItem}>Revies</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
