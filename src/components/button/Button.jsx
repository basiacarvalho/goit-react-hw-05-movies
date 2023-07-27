import css from './Button.module.css';
import { FormPreviousLink } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <button className={css.moviesButton} onClick={goBack}>
      <FormPreviousLink color="#757575" />
      Go back
    </button>
  );
};
