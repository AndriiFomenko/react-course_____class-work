import { useState } from 'react'

const ErrorDemo = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false)

  // Якщо активовано тригер помилки, викидаємо виняток під час рендерингу
  if (shouldThrowError) {
    throw new Error('Критична помилка рендерингу: Спровоковано штучний збій для тесту useRouteError()!')
  }

  return (
    <div className="page-content">
      <span className="page-badge">useRouteError</span>
      <h1 className="page-title">Демонстрація useRouteError</h1>
      <p className="page-description">
        Хук <code>useRouteError()</code> викликається всередині компонента <code>errorElement</code> (Error Boundary) для
        перехоплення та обробки винятків або відповідей помилок без падіння всього додатку.
      </p>

      <div className="feature-card clickable card-danger" style={{ maxWidth: '640px', marginTop: '24px' }}>
        <div className="feature-icon">💥</div>
        <h3>Тестування Error Boundary</h3>
        <p>
          Натисніть кнопку нижче, щоб спровокувати викид <code>throw new Error(...)</code>. Маршрутизатор перехопить її,
          залишить меню та футер видимими, а в робочій зоні відобразить <code>ErrorPage</code> з даними з{' '}
          <code>useRouteError()</code>.
        </p>
        <button
          type="button"
          className="btn-danger"
          style={{ marginTop: '16px' }}
          onClick={() => setShouldThrowError(true)}
        >
          🚨 Спровокувати помилку
        </button>
      </div>
    </div>
  )
}

export default ErrorDemo
