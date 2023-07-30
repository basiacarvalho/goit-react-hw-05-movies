import { MovieInfo } from 'components/movieinfo/MovieInfo';
import { Button } from 'components/button/Button';
import { AdditionalInfo } from 'components/additionalinfo/AdditionalInfo';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cast } from 'components/cast/Cast';
import { Reviews } from 'components/reviews/Reviews';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const url = removeUrlPrefix();
    const movieId = extractMovieId(url);
    setMovieId(movieId);
  }, [location]);

  const removeUrlPrefix = () => {
    const prefix = '/movies/';
    const movieIndex = location.pathname.indexOf(prefix);
    return location.pathname.slice(movieIndex + prefix.length);
  };

  const extractMovieId = url => {
    const index = url.indexOf('/');
    if (index === -1) {
      return url;
    } else {
      return url.slice(0, index);
    }
  };

  return (
    <main className={css.container}>
      <Button />
      <MovieInfo movieId={movieId} />
      <AdditionalInfo movieId={movieId} />
      {location.pathname.includes('cast') && <Cast />}
      {location.pathname.includes('reviews') && <Reviews />}
    </main>
  );
};

export default MovieDetails;
