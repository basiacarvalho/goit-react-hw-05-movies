import { MovieInfo } from 'components/movieinfo/MovieInfo';
import { Button } from 'components/button/Button';
import { AdditionalInfo } from 'components/additionalinfo/AdditionalInfo';

const MovieDetails = () => {
  return (
    <main>
      <div>
        <Button />
        <MovieInfo />
        <AdditionalInfo />
      </div>
    </main>
  );
};

export default MovieDetails;
