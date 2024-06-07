import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/app/app';
import { NewsPage } from '@/pages/news';
import { VacanciesPage } from '@/pages/vacancies';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/news" />
      },
      {
        path: '/news',
        element: <NewsPage />
      },
      {
        path: '/vacancies',
        element: <VacanciesPage />
      }
    ]
  }
]);
