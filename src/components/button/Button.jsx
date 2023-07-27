import css from './Button.module.css';
import { FormPreviousLink } from 'grommet-icons';

export const Button = () => {
  return (
    <button className={css.moviesButton}>
      <FormPreviousLink color="#757575" />
      Go back
    </button>
  );
};
