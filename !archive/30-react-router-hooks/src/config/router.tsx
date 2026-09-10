import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout'
import ErrorPage from '../components/ErrorPage'
import { routes } from './routes.config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes.map(({ path, Component, ErrorBoundary }) => ({
      path,
      element: <Component />,
      ...(ErrorBoundary ? { errorElement: <ErrorBoundary /> } : {})
    }))
  }
])

export default router
