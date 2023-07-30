import css from './MovieInfo.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovieDetails } from 'utils';
import { useState } from 'react';

export const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieId = location.pathname.split('/').pop();
      const result = await getMovieDetails(movieId);
      setMovieDetails(result);
    };

    fetchMovieDetails();
  }, [location]);

  return (
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
  );
};

//  moviePoster: movieDetails.poster_path,
//     movieTitle: movieDetails.title,
//     movieReleaseDate: new Date(movieDetails.movieReleaseDate).getFullYear(),
//     movieOverview: movieDetails.overview,
//     movieGenres: movieDetails.genres.map(movieGenre => {
