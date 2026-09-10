import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import NotFound from '../components/NotFound'
import Features from '../components/Fetures'
import ErrorDemo from '../components/ErrorDemo'
import ErrorPage from '../components/ErrorPage'
import type { RouteInterface } from '../types/route.interface'

export const routes: RouteInterface[] = [
  { path: '/', label: 'Home', Component: Home, isInNav: true },
  { path: '/about', label: 'About', Component: About, isInNav: true },
  { path: '/contacts', label: 'Contacts', Component: Contacts, isInNav: true },
  { path: '/features', label: 'Features', Component: Features, isInNav: true },
  { path: '/features/:id', Component: Features, isInNav: false },
  {
    path: '/error-demo',
    label: 'Error Demo',
    Component: ErrorDemo,
    ErrorBoundary: ErrorPage,
    isInNav: true
  },
  { path: '*', Component: NotFound }
]

export const navRoutes = routes.filter((route) => route.isInNav)
