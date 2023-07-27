import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={css.movieContainer}>
      <p className={css.additionalInfoMovieTitle}>Additional information</p>
      <ul className={css.movieList}>
        <li className={css.listItem}>Cast</li>
        <li className={css.listItem}>Revies</li>
      </ul>
    </div>
  );
};
