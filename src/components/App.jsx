import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './commonlayout/CommonLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
