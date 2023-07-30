import css from './Reviews.module.css';
import { useEffect } from 'react';
import { getMovieReviews } from 'utils';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const urlParts = location.pathname.split('/');
      const movieId = urlParts[urlParts.length - 2];
      const result = await getMovieReviews(movieId);
      setMovieReviews(result);
    };

    fetchMovieReviews();
  }, [location]);

  return (
    <>
      {movieReviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul className={css.list}>
          {movieReviews.map(item => (
            <li className={css.listItem} key={item.id}>
              <h5 className={css.title}>{`Author: ${item.author}`}</h5>
              <p className={css.description}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
