import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router'
import {
  ALLOWED_SORT_KEYS,
  fetchArticles,
  isValidSortKey,
  type AllowedSortKey
} from '../../api/api'
import type { ArticleInterface } from '../../types/article.interface'

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Зчитуємо sortBy з адресного рядка URL
  const sortByParam = searchParams.get('sortBy')
  const hasSortParam = searchParams.has('sortBy')
  const isInvalidSort = hasSortParam && !isValidSortKey(sortByParam)

  // Валідоване значення: якщо ключ валідний — беремо його, інакше дефолтний 'id'
  const sortBy: AllowedSortKey = isValidSortKey(sortByParam) ? sortByParam : 'id'

  // Визначаємо поле та порядок сортування на основі значення в URL
  const isDesc = sortBy.startsWith('-')
  const rawField = isDesc ? sortBy.slice(1) : sortBy
  const sortField: 'id' | 'title' = rawField === 'title' ? 'title' : 'id'
  const sortOrder: 'asc' | 'desc' = isDesc ? 'desc' : 'asc'

  // Оновлення параметрів у URL через setSearchParams
  const handleFieldChange = (newField: 'id' | 'title') => {
    const newSortBy = sortOrder === 'desc' ? `-${newField}` : newField
    setSearchParams({ sortBy: newSortBy })
    setIsLoading(true)
  }

  const handleOrderChange = (newOrder: 'asc' | 'desc') => {
    const newSortBy = newOrder === 'desc' ? `-${sortField}` : sortField
    setSearchParams({ sortBy: newSortBy })
    setIsLoading(true)
  }

  useEffect(() => {
    // Якщо в URL передано невалідний ключ сортування — перекидаємо на чистий список статей (/articles)
    if (isInvalidSort) {
      console.warn(`Невалідний ключ сортування: "${sortByParam}". Перенаправлення на /articles`)
      navigate('/articles', { replace: true })
      return
    }

    let isMounted = true

    fetchArticles(sortBy)
      .then((data) => {
        if (isMounted) {
          setArticles(data)
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Помилка завантаження статей')
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [isInvalidSort, navigate, sortBy, sortByParam])

  return (
    <div className="page-content">
      <h1 className="page-title">Статті (Articles)</h1>

      {/* Панель сортування */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          marginTop: '20px',
          marginBottom: '24px',
          padding: '16px 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="sortField" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Поле сортування:
          </label>
          <select
            id="sortField"
            name="sortField"
            value={sortField}
            onChange={(e) => handleFieldChange(e.target.value as 'id' | 'title')}
            style={{
              padding: '8px 14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="id">ID</option>
            <option value="title">Title (Назва)</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="sortOrder" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Порядок:
          </label>
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={(e) => handleOrderChange(e.target.value as 'asc' | 'desc')}
            style={{
              padding: '8px 14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="asc">Зростання (asc)</option>
            <option value="desc">Спадання (desc)</option>
          </select>
        </div>

        {/* Відображення параметра в URL та кнопка скидання */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>В адресному рядку:</span>
            <code>?sortBy={sortBy}</code>
          </div>

          {searchParams.has('sortBy') && (
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
              onClick={() => {
                setSearchParams({})
                setIsLoading(true)
              }}
            >
              🔄 Скинути URL
            </button>
          )}

          <div style={{ width: '100%', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'right' }}>
            Дозволені ключі сортування: <code>{ALLOWED_SORT_KEYS.join(', ')}</code>
          </div>
        </div>
      </form>

      {/* Стан завантаження */}
      {isLoading && <p style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>⏳ Завантаження статей...</p>}

      {/* Стан помилки */}
      {error && (
        <div
          style={{
            marginTop: '16px',
            padding: '16px 20px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            color: '#fca5a5'
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Список статей */}
      {!isLoading && !error && (
        <div className="features-grid" style={{ marginTop: '20px' }}>
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}/${article.id}`}
              state={{ from: location, id: article.id }}
              className="feature-card clickable"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div className="feature-icon" style={{ margin: 0 }}>📄</div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 10px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    color: '#a5b4fc'
                  }}
                >
                  ID: #{article.id}
                </span>
              </div>
              <h3 style={{ textTransform: 'capitalize' }}>{article.title}</h3>
              <p style={{ flex: 1 }}>{article.body.slice(0, 110)}...</p>
              <span
                style={{
                  marginTop: '12px',
                  color: 'var(--text-accent)',
                  fontWeight: 600,
                  fontSize: '0.88rem'
                }}
              >
                Читати статтю #{article.id} →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Articles
