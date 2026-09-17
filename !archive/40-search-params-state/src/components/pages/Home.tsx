import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page-content">
      <span className="page-badge">Головна</span>
      <h1 className="page-title">Ласкаво просимо до React Router!</h1>
      <p className="page-description">
        Клікніть на картку нижче — перехід виконується програмно за допомогою хука <code>useNavigate()</code>:
      </p>

      <div className="features-grid">
        <div
          className="feature-card clickable"
          onClick={() => navigate('/articles')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/articles')}
        >
          <div className="feature-icon">📰</div>
          <h3>Статті (Articles)</h3>
          <p>
            Перегляд списку статей, робота з <code>useSearchParams</code> та перехід на детальні сторінки <code>SingleArticle</code>.
          </p>
        </div>

        <div
          className="feature-card clickable card-danger"
          onClick={() => navigate('/non-existing-page')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/non-existing-page')}
        >
          <div className="feature-icon">🔍</div>
          <h3>Тест 404 (NotFound)</h3>
          <p>Перевірити роботу сторінки 404 помилки. Клік для переходу на неіснуючий маршрут.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
