import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page-content">
      <span className="page-badge">Головна</span>
      <h1 className="page-title">Ласкаво просимо до React Router!</h1>
      <p className="page-description">
        Клікніть на будь-яку картку нижче — перехід виконується програмно за допомогою хука <code>useNavigate()</code>:
      </p>

      <div className="features-grid">
        <div
          className="feature-card clickable"
          onClick={() => navigate('/about')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/about')}
        >
          <div className="feature-icon">📖</div>
          <h3>Про нас (About)</h3>
          <p>Дізнатися більше про проєкт. Клік для виклику <code>navigate('/about')</code>.</p>
        </div>

        <div
          className="feature-card clickable"
          onClick={() => navigate('/features')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/features')}
        >
          <div className="feature-icon">⚡</div>
          <h3>Можливості (Features)</h3>
          <p>Ознайомитися з фічами курсу. Клік для виклику <code>navigate('/features')</code>.</p>
        </div>

        <div
          className="feature-card clickable"
          onClick={() => navigate('/contacts')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/contacts')}
        >
          <div className="feature-icon">📞</div>
          <h3>Контакти (Contacts)</h3>
          <p>Зворотний зв'язок та підтримка. Клік для виклику <code>navigate('/contacts')</code>.</p>
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
          <p>Перевірити сторінку 404 помилки. Клік для переходу на неіснуючий маршрут.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
