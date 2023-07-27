import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={css.additionalInfoMovieContainer}>
      <p className={css.additionalInfoMovieTitle}>Additional information</p>
      <ul className={css.additionalInfoMovieList}>
        <li className={css.additionalInfoMovieListItem}>Cast</li>
        <li className={css.additionalInfoMovieListItem}>Revies</li>
      </ul>
    </div>
  );
};
