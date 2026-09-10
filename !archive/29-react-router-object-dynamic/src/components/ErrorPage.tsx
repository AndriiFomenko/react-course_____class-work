import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  let errorMessage = 'Невідома помилка'
  let errorStatus: string | number = 'Помилка'

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status
    errorMessage = error.data?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  }

  return (
    <div className="page-content card-danger" style={{ border: '1px solid rgba(239, 68, 68, 0.4)' }}>
      <span className="page-badge badge-danger">useRouteError()</span>
      <h1 className="page-title" style={{ color: '#f87171' }}>
        ⚠️ Перехоплено помилку: {errorStatus}
      </h1>
      <p className="page-description">
        Хук <code>useRouteError()</code> успішно отримав дані про збій у поточному маршруті:
      </p>

      <div className="inspector-card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
        <div className="inspector-header">
          <span className="inspector-title" style={{ color: '#f87171' }}>
            Об'єкт помилки (useRouteError)
          </span>
          <span className="page-badge badge-danger" style={{ margin: 0 }}>
            Error Boundary
          </span>
        </div>
        <div className="inspector-list">
          <div className="inspector-row">
            <span className="inspector-label">Тип помилки:</span>
            <span className="inspector-value" style={{ color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
              {isRouteErrorResponse(error) ? 'RouteErrorResponse' : error instanceof Error ? 'Error (Exception)' : typeof error}
            </span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">Повідомлення:</span>
            <span className="inspector-value" style={{ color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
              "{errorMessage}"
            </span>
          </div>
        </div>
      </div>

      <div className="button-group" style={{ marginTop: '24px' }}>
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            // Перехід на /error-demo для повторного тесту
            navigate('/error-demo')
            window.location.reload()
          }}
        >
          🔄 Спробувати знову (Reload)
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate('/')}
        >
          🏠 На головну
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
