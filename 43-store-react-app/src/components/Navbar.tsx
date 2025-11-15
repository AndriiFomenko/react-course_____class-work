import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import type { RootState } from '../redux/store'
import { login, logout } from '../redux/authSlice'

interface LinkInterface {
  path: string
  label: string
}

const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleLogin = () => {
    dispatch(login())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const navLinks: LinkInterface[] = [
    { path: '/', label: 'Products' },
    { path: '/posts', label: 'Posts' },
    { path: '/users', label: 'Users' },
    { path: '/todos', label: 'Todos' }
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__item">
              <NavLink className="navbar__link" to={link.path}>
                {link.label}
              </NavLink>
            </li>
          ))}
          {isAuthenticated ? (
            <li className="navbar__item">
              <button className="navbar__link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li className="navbar__item">
              <button className="navbar__link" onClick={handleLogin}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
