import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { fetchArticleById, isValidSortKey } from '../../api/api'
import type { ArticleInterface } from '../../types/article.interface'

interface ArticleLocationState {
  from?: { pathname: string; search: string }
  id?: number | string
}

const SingleArticle = () => {
  const navigate = useNavigate()
  // Для ідентифікації ID використовуємо виключно параметри з адресного рядка (useParams)
  const { id, slug } = useParams<{ id: string; slug: string }>()
  const location = useLocation()
  const state = location.state as ArticleLocationState | null

  // Логування отриманого state у консоль
  console.log('SingleArticle location.state:', location.state)

  const [article, setArticle] = useState<ArticleInterface | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Безпечне посилання повернення: якщо у збереженому URL невалідний sortBy — перенаправляємо на чистий '/articles'
  const backLinkHref = (() => {
    if (!state?.from) return '/articles'
    if (state.from.search) {
      const params = new URLSearchParams(state.from.search)
      const sort = params.get('sortBy')
      if (params.has('sortBy') && !isValidSortKey(sort)) {
        return '/articles'
      }
    }
    return state.from
  })()

  useEffect(() => {
    if (!id) return

    let isMounted = true

    fetchArticleById(id)
      .then((data) => {
        if (isMounted) {
          setArticle(data)
          setIsLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Помилка завантаження статті')
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [id])

  return (
    <div className="page-content">
      <span className="page-badge">Single Article</span>
      <h1 className="page-title" style={{ textTransform: 'capitalize' }}>
        {article ? article.title : `Стаття #${id}`}
      </h1>

      {/* Блок з ID та Slug */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#a5b4fc',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.85rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span>🆔 ID:</span>
          <span style={{ color: '#ffffff' }}>{article?.id ?? id}</span>
        </span>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            backgroundColor: 'rgba(236, 72, 153, 0.12)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            color: '#f472b6',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.85rem',
            fontWeight: 500,
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span>🏷️ Slug:</span>
          <span style={{ color: '#ffffff' }}>{article?.slug || slug || 'не вказано'}</span>
        </span>
      </div>

      {/* Навігація: прямий перехід до всіх статей та кнопка повернення */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <button
          type="button"
          onClick={() => navigate('/articles')}
          className="btn-primary"
        >
          📰 До списку всіх статей
        </button>

        <Link to={backLinkHref} className="btn-secondary">
          ⬅️ Назад до попереднього списку
        </Link>
      </div>

      {/* Інспектор стану */}
      <div className="inspector-card" style={{ marginBottom: '24px' }}>
        <div className="inspector-header">
          <span className="inspector-title">📍 Інспектор location.state & useParams</span>
          <span className="page-badge" style={{ margin: 0 }}>
            State & Params
          </span>
        </div>
        <div className="inspector-list">
          <div className="inspector-row">
            <span className="inspector-label">Параметр :id (useParams):</span>
            <span className="inspector-value">{id}</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">Параметр :slug (useParams):</span>
            <span className="inspector-value">{slug || 'не задано'}</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">ID зі state (location.state?.id):</span>
            <span className="inspector-value">{state?.id !== undefined ? String(state.id) : 'не передано в state'}</span>
          </div>
          <div className="inspector-row">
            <span className="inspector-label">Попередній маршрут (location.state?.from):</span>
            <span className="inspector-value">
              {JSON.stringify(state?.from || 'відсутній (прямий перехід)')}
            </span>
          </div>
        </div>
      </div>

      {/* Завантаження або помилка */}
      {isLoading && (
        <div style={{ padding: '24px 0', color: 'var(--text-secondary)' }}>
          ⏳ Завантаження статті з API...
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '16px 20px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            color: '#fca5a5',
            marginBottom: '20px'
          }}
        >
          ⚠️ Не вдалося завантажити статтю: {error}
        </div>
      )}

      {/* Тіло статті */}
      {article && !isLoading && (
        <div
          style={{
            padding: '28px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            lineHeight: 1.8
          }}
        >
          <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
            {article.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            {article.body}
          </p>
        </div>
      )}
    </div>
  )
}

export default SingleArticle
