import { useNavigate, useParams } from 'react-router'

const featuresData: Record<string, { title: string; desc: string; icon: string }> = {
  navigation: {
    title: 'Декларативна та програмна навігація',
    desc: 'Використання NavLink для меню та useNavigate для переходів за подіями.',
    icon: '🧭'
  },
  hooks: {
    title: 'Хуки React Router',
    desc: 'useNavigate, useLocation, useParams та useSearchParams для повного контролю стану додатку.',
    icon: '⚡'
  },
  parameters: {
    title: 'Динамічні маршрути (useParams)',
    desc: 'Зчитування параметрів зі шляху URL (визначених через двокрапку, наприклад :id).',
    icon: '🎯'
  }
}

const Features = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { id } = params

  const currentFeature = id ? featuresData[id] : null

  return (
    <div className="page-content">
      <span className="page-badge">Можливості</span>
      <h1 className="page-title">Демонстрація useParams</h1>
      <p className="page-description">
        Хук <code>useParams()</code> зчитує динамічні параметри з URL (визначені як <code>:id</code> у конфігурації
        маршруту <code>/features/:id</code>).
      </p>

      {/* Інспектор useParams */}
      <div className="inspector-card">
        <div className="inspector-header">
          <span className="inspector-title">🎯 Результат виклику useParams()</span>
          <span className="page-badge" style={{ margin: 0 }}>
            Динамічні параметри
          </span>
        </div>
        <div className="inspector-list">
          <div className="inspector-row">
            <span className="inspector-label">useParams():</span>
            <span className="inspector-value">{JSON.stringify(params)}</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">Параметр id:</span>
            <span className="inspector-value">
              {id ? `"${id}"` : 'undefined (параметр відсутній у поточному URL)'}
            </span>
          </div>
        </div>
      </div>

      {/* Кнопки перемикання динамічного маршруту */}
      <h3 style={{ marginTop: '28px', marginBottom: '12px', fontSize: '1.1rem' }}>
        Оберіть динамічний параметр для переходу:
      </h3>
      <div className="button-group">
        <button
          type="button"
          className={id === 'navigation' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => navigate('/features/navigation')}
        >
          🧭 /features/navigation
        </button>

        <button
          type="button"
          className={id === 'hooks' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => navigate('/features/hooks')}
        >
          ⚡ /features/hooks
        </button>

        <button
          type="button"
          className={id === 'parameters' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => navigate('/features/parameters')}
        >
          🎯 /features/parameters
        </button>

        <button
          type="button"
          className={id === '42' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => navigate('/features/42')}
        >
          🔢 /features/42
        </button>

        <button
          type="button"
          className="btn-danger"
          onClick={() => navigate('/features')}
        >
          🔄 Скинути ID (на /features)
        </button>
      </div>

      {/* Динамічний блок для обраного id */}
      {id && (
        <div
          style={{
            marginTop: '28px',
            padding: '20px',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            borderRadius: '12px',
            border: '1px solid var(--border-active)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>{currentFeature?.icon || '📌'}</span>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
              {currentFeature?.title || `Особливість з ID: ${id}`}
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            {currentFeature?.desc || `Дані для ідентифікатора "${id}" отримано динамічно через useParams().`}
          </p>
        </div>
      )}
    </div>
  )
}

export default Features
