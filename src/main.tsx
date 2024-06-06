import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from '@/app/router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
