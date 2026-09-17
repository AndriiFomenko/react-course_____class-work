import { createBrowserRouter } from 'react-router'
import Layout from '../components/layouts/Layout'
import NotFound from '../components/pages/NotFound'
import { routes } from './routes.config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes.map(({ path, Component, ErrorBoundary }) => ({
      path,
      element: <Component />,
      ...(ErrorBoundary ? { errorElement: <ErrorBoundary /> } : {})
    }))
  }
])

export default router
