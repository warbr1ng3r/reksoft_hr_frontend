import { createBrowserRouter } from 'react-router-dom';
import App from '@/app/app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'team',
        element: <h1>TEAM</h1>
      }
    ]
  }
]);
