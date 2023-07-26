import { Outlet } from 'react-router-dom';
import css from './CommonLayout.module.css';
import { Suspense } from 'react';

export const CommonLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.navigation}>
          <li className={css.navigationItem}>Home</li>
          <li className={css.navigationItem}>Movies</li>
        </ul>
      </header>
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
