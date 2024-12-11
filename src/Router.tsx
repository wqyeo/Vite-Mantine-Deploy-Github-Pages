import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/Vite-Mantine-Deploy-Github-Pages',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
