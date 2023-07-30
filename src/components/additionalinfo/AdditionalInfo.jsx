import css from './AdditionalInfo.module.css';
import { Link } from 'react-router-dom';

export const AdditionalInfo = ({ movieId }) => {
  return (
    <div className={css.movieContainer}>
      <p className={css.additionalInfoMovieTitle}>Additional information</p>
      <ul className={css.movieList}>
        <li className={css.listItem}>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li className={css.listItem}>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
