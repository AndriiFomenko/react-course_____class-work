import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="page-content">
      <span className="page-badge">Про проєкт</span>
      <h1 className="page-title">Про проєкт</h1>
      <p className="page-description">
        Демонстрація роботи хука <code>useNavigate</code> для програмного керування переходами за кліком на кнопки:
      </p>

      <div className="button-group">
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate('/')}
        >
          🏠 На головну
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate('/features')}
        >
          ⚡ До розділу Features
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate(-1)}
        >
          ⬅️ Назад (navigate(-1))
        </button>

        <button
          type="button"
          className="btn-danger"
          onClick={() => navigate('/broken-link-test')}
        >
          ⚠️ Тест 404 (NotFound)
        </button>
      </div>
    </div>
  )
}

export default About
