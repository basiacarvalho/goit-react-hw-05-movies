import { NavLink, Outlet } from 'react-router-dom';
import css from './CommonLayout.module.css';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';

export const CommonLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.item}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.item}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
