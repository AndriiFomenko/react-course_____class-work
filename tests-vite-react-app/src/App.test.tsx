// ============================================
// ІМПОРТИ БІБЛІОТЕК ДЛЯ ТЕСТУВАННЯ
// ============================================

// render - функція для рендерингу React компонентів у тестовому середовищі
// screen - об'єкт для пошуку елементів у відрендереному DOM
// act - обгортка для синхронізації асинхронних операцій React (оновлення стану, ефекти)
import { render, screen, act } from '@testing-library/react'

// vi - об'єкт Vitest для створення моків, шпигунів та керування таймерами
// describe - групування пов'язаних тестів
// test - визначення окремого тестового випадку
// expect - створення assertions (перевірок)
// beforeAll/afterAll - хуки, що виконуються один раз до/після всіх тестів
// beforeEach/afterEach - хуки, що виконуються перед/після кожного тесту
import { vi, describe, test, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest'

// Розширення для додаткових матчерів (toBeInTheDocument, тощо)
import '@testing-library/jest-dom'

// Компонент, який ми тестуємо
import App from './App'

// ============================================
// ГЛОБАЛЬНІ ХУКИ ЖИТТЄВОГО ЦИКЛУ
// ============================================

// Виконується ОДИН РАЗ перед усіма тестами у файлі
beforeAll(() => {
  // Створюємо шпигуна для console.error та заглушуємо його
  // Це потрібно, щоб React не виводив помилки в консоль під час тестів
  // (наприклад, коли ми навмисно викликаємо помилки для тестування)
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

// Виконується ОДИН РАЗ після всіх тестів у файлі
afterAll(() => {
  // Відновлюємо всі моки до їх оригінального стану
  // Це важливо для уникнення впливу на інші тестові файли
  vi.restoreAllMocks()
})

// ============================================
// ТЕСТОВА ГРУПА 1: УСПІШНЕ ЗАВАНТАЖЕННЯ ПОСТІВ
// ============================================
describe('App component - successful posts loading', () => {
  // Оголошуємо змінну для мок-функції fetch
  // let використовується, бо ми перевизначаємо її в beforeEach
  let fetchMock = vi.fn()

  // Виконується перед КОЖНИМ тестом у цій групі
  // async - бо ми використовуємо await для act()
  beforeEach(async () => {
    // Створюємо мок для fetch API, який імітує успішну відповідь
    fetchMock = vi.fn().mockImplementation(() =>
      // Promise.resolve симулює успішний HTTP запит
      Promise.resolve({
        // ok: true означає статус 200-299 (успішний запит)
        ok: true,
        // json() - метод для парсингу JSON відповіді
        json: () =>
          Promise.resolve([
            // Масив тестових постів, які повертає "API"
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

    // Заміняємо глобальну функцію fetch нашим моком
    // stubGlobal - правильний спосіб мокування глобальних об'єктів у Vitest
    vi.stubGlobal('fetch', fetchMock)

    // Вмикаємо фейкові таймери для контролю над setTimeout/setInterval
    // Це дозволяє нам керувати часом у тестах
    vi.useFakeTimers()

    // Рендеримо компонент App у тестовому середовищі
    render(<App />)

    // act() гарантує, що всі оновлення стану завершаться
    // await - чекаємо завершення асинхронних операцій
    await act(async () => {
      // Прокручуємо час вперед на 1500мс
      // Це імітує спрацювання setTimeout у компоненті
      vi.advanceTimersByTime(1500)
    })
  })

  // Виконується після КОЖНОГО тесту у цій групі
  afterEach(() => {
    // Очищаємо історію викликів моків (скільки разів викликалися, з якими аргументами)
    vi.clearAllMocks()

    // Видаляємо всі глобальні заглушки (unstub fetch)
    vi.unstubAllGlobals()

    // Повертаємо реальні таймери
    vi.useRealTimers()
  })

  // ТЕСТ 1: Перевіряємо, що fetch викликався рівно один раз
  test('calls fetch API after timer advance', () => {
    // toHaveBeenCalledTimes - матчер для перевірки кількості викликів
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  // ТЕСТ 2: Перевіряємо, що заголовки постів відображаються
  test('displays post titles', () => {
    // getAllByRole - знаходить ВСІ елементи з роллю 'heading' (h1, h2, h3...)
    // /Post [1-2]/i - регулярний вираз (i = case insensitive)
    const postTitles = screen.getAllByRole('heading', { name: /Post [1-2]/i })

    // Перевіряємо, що знайдено рівно 2 заголовки
    expect(postTitles).toHaveLength(2)
  })

  // ТЕСТ 3: Перевіряємо, що тіла постів відображаються
  test('displays post bodies', () => {
    // getAllByText - знаходить ВСІ елементи з текстом, що відповідає регулярному виразу
    const postBodies = screen.getAllByText(/Body [1-2]/i)

    // Перевіряємо, що знайдено рівно 2 тіла постів
    expect(postBodies).toHaveLength(2)
  })
})

// ============================================
// ТЕСТОВА ГРУПА 2: НЕВДАЛЕ ЗАВАНТАЖЕННЯ (ПОМИЛКА МЕРЕЖІ)
// ============================================
describe('App component - failed posts loading', () => {
  let fetchMock = vi.fn()

  beforeEach(async () => {
    // mockRejectedValueOnce - мок, який викидає помилку при ПЕРШОМУ виклику
    // Це імітує ситуацію, коли fetch не може підключитися до сервера
    fetchMock = vi.fn().mockRejectedValueOnce(new Error('Failed to fetch posts'))

    vi.stubGlobal('fetch', fetchMock)
    vi.useFakeTimers()

    render(<App />)
    await act(async () => {
      vi.advanceTimersByTime(1500)
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  // ТЕСТ: Перевіряємо, що відображається повідомлення про помилку
  test('displays error message on failed API call', () => {
    // getByText - знаходить ОДИН елемент з текстом помилки
    // Якщо елемент не знайдено, тест провалиться
    const errorMessage = screen.getByText(/Failed to fetch posts/i)

    // toBeInTheDocument - матчер з jest-dom, перевіряє наявність у DOM
    expect(errorMessage).toBeInTheDocument()
  })
})

// ============================================
// ТЕСТОВА ГРУПА 3: СТАН ЗАВАНТАЖЕННЯ
// ============================================
describe('App component - loading state', () => {
  let fetchMock = vi.fn()

  // Тут beforeEach НЕ async, бо ми НЕ викликаємо act() одразу
  // Ми хочемо перевірити початковий стан (loading)
  beforeEach(() => {
    // Мок повертає порожній масив постів
    fetchMock = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    )

    vi.stubGlobal('fetch', fetchMock)
    vi.useFakeTimers()

    // Рендеримо компонент, але НЕ прокручуємо таймери
    // Це дозволяє перевірити стан "Loading..."
    render(<App />)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  // ТЕСТ 1: Перевіряємо, що спочатку показується "Loading..."
  test('displays loading message initially', () => {
    const loadingMessage = screen.getByText(/Loading.../i)
    expect(loadingMessage).toBeInTheDocument()
  })

  // ТЕСТ 2: Перевіряємо, що під час завантаження постів немає
  test('does not display posts while loading', () => {
    // queryAllByRole - як getAllByRole, але НЕ кидає помилку, якщо нічого не знайдено
    // Повертає порожній масив замість помилки
    const postTitles = screen.queryAllByRole('heading', { name: /Post/i })

    // Очікуємо 1 заголовок (це h1 з текстом "Posts")
    // Постів ще немає, бо таймер не спрацював
    expect(postTitles).toHaveLength(1)
  })

  // ТЕСТ 3: Перевіряємо, що "Loading..." зникає після завантаження
  test('hides loading message after posts are loaded', async () => {
    // Тепер прокручуємо таймери
    await act(async () => {
      vi.advanceTimersByTime(1500)
    })

    // queryByText - як getByText, але повертає null замість помилки
    // not.toBeInTheDocument - перевіряємо, що елемента НЕМАЄ в DOM
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
  })
})

// ============================================
// ТЕСТОВА ГРУПА 4: ПОМИЛКА СЕРВЕРА (response.ok = false)
// ============================================
describe('App component - server error (response not ok)', () => {
  let fetchMock = vi.fn()

  beforeEach(async () => {
    // Імітуємо ситуацію, коли сервер відповів, але зі статусом помилки
    // (наприклад, 404, 500, тощо)
    fetchMock = vi.fn().mockImplementation(() =>
      Promise.resolve({
        // ok: false означає статус >= 400 (помилка)
        ok: false,
        json: () => Promise.resolve({})
      })
    )

    vi.stubGlobal('fetch', fetchMock)
    vi.useFakeTimers()

    render(<App />)
    await act(async () => {
      vi.advanceTimersByTime(1500)
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  // ТЕСТ: Перевіряємо, що показується помилка при response.ok = false
  test('displays error message when response is not ok', () => {
    const errorMessage = screen.getByText(/Failed to fetch posts/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
