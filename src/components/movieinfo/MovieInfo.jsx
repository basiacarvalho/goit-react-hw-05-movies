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
        src="https://via.placeholder.com/200x100"
        alt=""
      ></img>
      <div className={css.movieInfo}>
        <h3 className={css.title}>{movieDetails.movieTitle}</h3>
        <p className={css.description}>'User Scores: ${74}%'</p>
        <h5 className={css.title}>Overview</h5>
        <p className={css.description}>
          Lorem ipsum dolor sit amet. Hic consequatur fugit sed officiis
          voluptatem non libero maxime. Aut sunt obcaecati sed assumenda officia
          quo omnis corporis est neque quas aut voluptas quae.
        </p>
        <h6 className={css.title}>Genres</h6>
        <p className={css.description}>Drama History War</p>
      </div>
    </div>
  );
};
