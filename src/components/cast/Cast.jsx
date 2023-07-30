import css from './Cast.module.css';
import { useEffect } from 'react';
import { getMovieCast } from 'utils';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Cast = () => {
  const [movieCastDetails, setMovieCastDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieCastDetails = async () => {
      const urlParts = location.pathname.split('/');
      const movieId = urlParts[urlParts.length - 2];
      const result = await getMovieCast(movieId);
      setMovieCastDetails(
        result.filter(item => {
          return item.profileImage !== null;
        })
      );
    };

    fetchMovieCastDetails();
  }, [location]);

  return (
    <ul className={css.list}>
      {movieCastDetails.map(item => (
        <li className={css.listItem} key={item.id}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w92${item.profileImage}`}
            alt={item.actorName}
          ></img>
          <ul className={css.info}>
            <li className={css.infoItem__name}>{item.actorName}</li>
            <li
              className={css.infoItem__role}
            >{`Character: ${item.character}`}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
