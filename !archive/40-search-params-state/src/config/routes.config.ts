import Home from '../components/pages/Home'
import Articles from '../components/pages/Articles'
import SingleArticle from '../components/pages/SingleArticle'
import NotFound from '../components/pages/NotFound'
import type { RouteInterface } from '../types/route.interface'

export const routes: RouteInterface[] = [
  { path: '/', label: 'Home', Component: Home, isInNav: true },
  { path: '/articles', label: 'Articles', Component: Articles, isInNav: true },
  { path: '/articles/:slug', Component: SingleArticle, isInNav: false },
  { path: '/articles/:slug/:id', Component: SingleArticle, isInNav: false },
  { path: '*', Component: NotFound }
]

export const navRoutes = routes.filter((route) => route.isInNav)
