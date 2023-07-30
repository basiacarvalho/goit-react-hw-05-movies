import css from './MovieInfo.module.css';
import { useEffect } from 'react';
import { getMovieDetails } from 'utils';
import { useState } from 'react';
import { Loader } from 'components/loader/Loader';

export const MovieInfo = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const result = await getMovieDetails(movieId);
      setMovieDetails(result);
    };
    if (movieId !== '') {
      fetchMovieDetails();
    }
  }, [movieId]);

  return (
    <>
      {movieDetails.moviePoster !== undefined ? (
        <div className={css.movieContainer}>
          <img
            className={css.movieImage}
            src={`https://image.tmdb.org/t/p/w185${movieDetails.moviePoster}`}
            alt={movieDetails.movieTitle}
          ></img>
          <div className={css.movieInfo}>
            <h3 className={css.title}>
              {movieDetails.movieTitle} ({movieDetails.movieReleaseDate})
            </h3>
            <p className={css.description}>'User Scores: {74}%'</p>
            <h5 className={css.title}>Overview</h5>
            <p className={css.description}>{movieDetails.movieOverview}</p>
            <h6 className={css.title}>Genres</h6>
            <p className={css.description}>{movieDetails.movieGenres}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
