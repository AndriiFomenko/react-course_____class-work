import { useLocation, useNavigate } from 'react-router'

const Contacts = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="page-content">
      <span className="page-badge">Зворотний зв'язок</span>
      <h1 className="page-title">Контакти</h1>
      <p className="page-description">
        Натисніть кнопку нижче: перехід виконується програмно за допомогою <code>useNavigate()</code>, а хук{' '}
        <code>useLocation()</code> зчитує та відображає оновлені дані маршруту (<code>search</code>, <code>hash</code>{' '}
        та <code>key</code>):
      </p>

      {/* Кнопки генерації значень через useNavigate */}
      <div className="button-group" style={{ marginBottom: '24px' }}>
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate('/contacts?topic=support&lang=ua#faq')}
        >
          ⚡ Згенерувати через useNavigate
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate('/contacts')}
        >
          🔄 Очистити (скинути до /contacts)
        </button>
      </div>

      {/* Інспектор об'єкта location */}
      <div className="inspector-card">
        <div className="inspector-header">
          <span className="inspector-title">📍 Об'єкт location (useLocation())</span>
          <span className="page-badge" style={{ margin: 0 }}>
            Поточний URL
          </span>
        </div>
        <div className="inspector-list">
          <div className="inspector-row">
            <span className="inspector-label">pathname:</span>
            <span className="inspector-value">"{location.pathname}"</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">search:</span>
            <span className="inspector-value">"{location.search || 'порожньо'}"</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">hash:</span>
            <span className="inspector-value">"{location.hash || 'порожньо'}"</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">key:</span>
            <span className="inspector-value">"{location.key}"</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
