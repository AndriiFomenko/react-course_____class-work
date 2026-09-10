import { NavLink, Link } from 'react-router'
import { navRoutes } from '../config/routes.config'

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <Link to="/" className="brand-logo">
          <span className="brand-icon">⚡</span>
          <span className="brand-name">React Router</span>
        </Link>
        <nav className="nav-menu">
          <ul className="nav-list">
            {navRoutes.map(({ path, label }) => (
              <li key={path} className="nav-item">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
