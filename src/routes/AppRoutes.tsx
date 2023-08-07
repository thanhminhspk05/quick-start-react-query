import { HashRouter, Route, Routes } from 'react-router-dom';

import PageLayout from '@/pages';
import Login from '@/pages/login';
import { generateRoute } from '@/routes/generateRoute';
import { paths } from '@/routes/paths';
import { adminRoutes } from '@/routes/routes';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={paths.login}
          element={<Login />}
        />
        <Route
          path="/"
          element={<PageLayout />}
        >
          {generateRoute(adminRoutes)}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
