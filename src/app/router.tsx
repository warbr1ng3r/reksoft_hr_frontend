import { createBrowserRouter } from 'react-router-dom';
import App from '@/app/app';
import { NewsPage } from '@/pages/news';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <NewsPage />
      },
      {
        path: 'team',
        element: <h1>TEAM</h1>
      }
    ]
  }
]);
