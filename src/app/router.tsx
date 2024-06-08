import { createBrowserRouter, Navigate } from 'react-router-dom';
import { NewsPage } from '@/pages/news';
import { VacanciesPage } from '@/pages/vacancies';
import { Page404 } from '@/pages/page-404';
import { MainLayout } from '@/layouts/main-layout';
import { SimpleLayout } from '@/layouts/simple-layout';
import { Auth } from '@/pages/auth-group/auth';
import { authRoutes } from '@/shared/routes';
import { Register } from '@/pages/auth-group/register';
import { ForgotPassword } from '@/pages/auth-group/forgot-password';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
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
  },
  {
    element: <SimpleLayout />,
    children: [
      { path: authRoutes.auth, element: <Auth /> },
      { path: authRoutes.register, element: <Register /> },
      { path: authRoutes.forgotPassword, element: <ForgotPassword /> },
      { path: '404', element: <Page404 /> },
      { path: '*', element: <Navigate to={'/404'} replace /> }
    ]
  }
]);
