import { Link } from 'react-router'
import { navRoutes } from '../config/routes.config'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} React Router. Навчальний проєкт.</p>
        <ul className="footer-nav">
          {navRoutes.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="footer-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
