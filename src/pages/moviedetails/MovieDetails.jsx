import { MovieInfo } from 'components/movieinfo/MovieInfo';
import { Button } from 'components/button/Button';
import { AdditionalInfo } from 'components/additionalinfo/AdditionalInfo';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <main className={css.container}>
      <Button />
      <MovieInfo />
      <AdditionalInfo />
    </main>
  );
};

export default MovieDetails;
