import css from './SearchMovieList.module.css';
import { Link } from 'react-router-dom';

export const SearchMovieList = ({ searchResults }) => {
  return (
    <ul className={css.searchMovieList}>
      {searchResults.map(el => (
        <li key={el.id} className={css.searchMovieListItem}>
          <Link to={`/movies/${el.id}`} className={css.link}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
