import axios from 'axios'
import type { ArticleInterface } from '../types/article.interface'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

type RawArticle = Omit<ArticleInterface, 'slug'>

/**
 * Нормалізація заголовка та генерація slug:
 * 1. Переведення в lowercase.
 * 2. Видалення знаків пунктуації.
 * 3. Заміна пробілів на тире.
 * 4. Очищення від подвійних та крайових тире.
 */
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Список дозволених ключів сортування для статей:
 * id, -id, title, -title
 */
export const ALLOWED_SORT_KEYS = ['id', '-id', 'title', '-title'] as const
export type AllowedSortKey = (typeof ALLOWED_SORT_KEYS)[number]

/**
 * Функція валідації ключа сортування.
 * Перевіряє, чи входить передане значення у масив дозволених ключів ALLOWED_SORT_KEYS.
 */
export const isValidSortKey = (key: unknown): key is AllowedSortKey => {
  if (typeof key !== 'string') return false
  return (ALLOWED_SORT_KEYS as readonly string[]).includes(key)
}

export const fetchArticles = async (
  sortBy = 'id',
  limit = 100
): Promise<ArticleInterface[]> => {
  // Валідація: якщо sortBy некоректний — використовуємо дефолтне значення 'id'
  const safeSortBy: AllowedSortKey = isValidSortKey(sortBy) ? sortBy : 'id'

  // Виведення у консоль отриманого параметра для дебагінгу
  console.log('fetchArticles received sortBy:', sortBy, '-> safeSortBy:', safeSortBy)

  // Якщо значення починається з мінуса (-id, -title) — сортування desc, інакше — asc
  const isDesc = safeSortBy.startsWith('-')
  const sortField = isDesc ? safeSortBy.slice(1) : safeSortBy
  const sortOrder = isDesc ? 'desc' : 'asc'

  const response = await axios.get<RawArticle[]>(
    `${BASE_URL}?_limit=${limit}&_sort=${sortField}&_order=${sortOrder}`
  )
  return response.data.map((item) => ({
    ...item,
    slug: createSlug(item.title)
  }))
}

export const fetchArticleById = async (id: number | string): Promise<ArticleInterface> => {
  const response = await axios.get<RawArticle>(`${BASE_URL}/${id}`)
  return {
    ...response.data,
    slug: createSlug(response.data.title)
  }
}
