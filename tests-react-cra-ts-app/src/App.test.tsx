import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

// Глобальний beforeAll: приховуємо помилки в консолі під час тестів
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

// Глобальний afterAll: відновлюємо всі моки після завершення тестів
afterAll(() => {
  jest.restoreAllMocks()
})

// ========================================
// ГРУПА 1: Тестування успішного завантаження постів
// ========================================
describe('App component - successful posts loading', () => {
  let fetchMock = jest.fn()

  beforeEach(() => {
    // Мокуємо fetch для успішної відповіді з двома постами
    fetchMock = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              title: 'Post 1',
              body: 'Body 1',
              userId: 1
            },
            {
              id: 2,
              title: 'Post 2',
              body: 'Body 2',
              userId: 2
            }
          ])
      })
    )
    // Замінюємо глобальний fetch нашим моком
    global.fetch = fetchMock
    // Використовуємо фейкові таймери для контролю часу
    jest.useFakeTimers()

    // Рендеримо компонент один раз для всіх тестів групи
    render(<App />)
    // Пропускаємо таймер 1000мс (імітуємо setTimeout в компоненті)
    jest.advanceTimersByTime(1000)
  })

  afterEach(() => {
    // Очищаємо всі моки перед наступним тестом
    jest.clearAllMocks()
    // Повертаємо реальні таймери
    jest.useRealTimers()
  })

  test('calls fetch API after timer advance', async () => {
    // Перевіряємо, що fetch був викликаний рівно один раз
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1)
    })
  })

  test('displays post titles', async () => {
    // Шукаємо всі заголовки (h2) з текстом "Post 1" або "Post 2"
    const postTitles = await screen.findAllByRole('heading', { name: /Post [1-2]/i })
    // Перевіряємо, що знайдено рівно 2 заголовки
    expect(postTitles).toHaveLength(2)
  })

  test('displays post bodies', async () => {
    // Шукаємо всі елементи з текстом "Body 1" або "Body 2"
    const postBodies = await screen.findAllByText(/Body [1-2]/i)
    // Перевіряємо, що знайдено рівно 2 тіла постів
    expect(postBodies).toHaveLength(2)
  })
})

// ========================================
// ГРУПА 2: Тестування невдалого завантаження постів
// ========================================
describe('App component - failed posts loading', () => {
  let fetchMock = jest.fn()

  beforeEach(() => {
    // Мокуємо fetch для помилки (rejected Promise)
    fetchMock = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch posts'))
    global.fetch = fetchMock
    jest.useFakeTimers()

    render(<App />)
    jest.advanceTimersByTime(1000) // Пропускаємо таймер 1000мс
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.useRealTimers()
  })

  test('displays error message on failed API call', async () => {
    // Перевіряємо, що відображається повідомлення про помилку
    const errorMessage = await screen.findByText(/Failed to fetch posts/i)
    expect(errorMessage).toBeInTheDocument()
  })
})

// ========================================
// ГРУПА 3: Тестування стану завантаження (loading)
// ========================================
describe('App component - loading state', () => {
  let fetchMock = jest.fn()

  beforeEach(() => {
    // Мокуємо fetch з порожнім масивом (нам важливий тільки стан loading)
    fetchMock = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    )
    global.fetch = fetchMock
    jest.useFakeTimers()

    // Рендеримо компонент БЕЗ просування таймера для перших двох тестів
    render(<App />)
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.useRealTimers()
  })

  test('displays loading message initially', () => {
    // Перевіряємо, що одразу після рендеру відображається "Loading..."
    // Використовуємо getByText (синхронний), бо елемент вже є на сторінці
    const loadingMessage = screen.getByText(/Loading.../i)
    expect(loadingMessage).toBeInTheDocument()
  })

  test('does not display posts while loading', () => {
    // Перевіряємо, що під час loading немає постів
    // queryAllByRole повертає масив (може бути порожнім, не кидає помилку)
    const postTitles = screen.queryAllByRole('heading', { name: /Post/i })
    // Очікуємо тільки 1 heading - це <h1>Posts</h1>, постів ще немає
    expect(postTitles).toHaveLength(1)
  })

  test('hides loading message after posts are loaded', async () => {
    // Просуваємо таймер, щоб fetch завершився
    jest.advanceTimersByTime(1000)

    // Чекаємо, поки "Loading..." зникне з DOM
    await waitFor(() => {
      // queryByText не кидає помилку, якщо елемент не знайдено (повертає null)
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
    })
  })
})
