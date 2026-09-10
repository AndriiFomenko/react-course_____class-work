import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="page-content" style={{ textAlign: 'center', padding: '60px 24px' }}>
      <span className="page-badge badge-danger">Помилка 404</span>
      <h1 className="page-title">Сторінку не знайдено</h1>
      <p className="page-description" style={{ margin: '0 auto 24px' }}>
        Сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
      <Link to="/" className="btn-primary">
        Повернутися на головну
      </Link>
    </div>
  )
}

export default NotFound
