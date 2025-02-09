import { createBrowserRouter } from 'react-router';

import { Homepage } from './pages/Homepage';
import { DetailPage } from './pages/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/show-detail/:id',
    element: <DetailPage />,
  },
]);

export default router;
