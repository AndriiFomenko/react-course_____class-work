import { Component } from 'react'

// ---------------------------------------------------------------------------
// У класовому компоненті типи все одно треба оголошувати вручну:
// окремий інтерфейс для props і окремий для state.
// У функціональному варіанті цього файлу їх не було взагалі.
// ---------------------------------------------------------------------------
// У класовому компоненті тип state треба оголошувати вручну окремим
// інтерфейсом. А перший дженерик (props) обовʼязковий, навіть якщо
// пропсів немає взагалі — ставимо `object`. У функціональному
// варіанті цього файлу не було жодного з цих рядків.
interface LifecycleState {
  count: number
}

class Lifecycle extends Component<object, LifecycleState> {
  // Замість локальної змінної `intervalId` всередині useEffect —
  // поле екземпляра класу, яке живе між методами життєвого циклу.
  private intervalId: number | undefined

  constructor(props: object) {
    super(props) // без цього виклику `this` недоступний — забув = помилка
    this.state = { count: 0 }

    // --- БІЛЬ №1: ручний байндинг методів ---
    // Без цих рядків `this` всередині обробників буде undefined.
    // У функціональному компоненті байндинг не потрібен взагалі.
    this.increment = this.increment.bind(this)

    console.log('constructor: компонент створено, state ініціалізовано')
  }

  // --- MOUNT ---
  // Функціональний еквівалент: useEffect(() => { ... }, [])
  componentDidMount(): void {
    console.log('Component mounted')

    this.intervalId = window.setInterval(() => {
      // Функціональна форма setState обовʼязкова — прямий доступ
      // до this.state всередині асинхронного колбека дасть застаріле значення.
      this.setState((prevState) => ({ count: prevState.count + 1 }))
      console.log(`Interval tick ${this.intervalId}`)
    }, 1000)
  }

  // --- UPDATE ---
  // Функціональний еквівалент: useEffect(() => { ... }, [count])
  // Увага: deps-масиву тут немає — порівняння prevState пишемо руками.
  // Забув перевірку `if` — отримав нескінченний цикл setState → update → setState.
  componentDidUpdate(
    _prevProps: object,
    prevState: LifecycleState,
  ): void {
    if (prevState.count !== this.state.count) {
      console.log(`Component updated. Count is ${this.state.count}`)
    }
  }

  // --- UNMOUNT ---
  // Функціональний еквівалент: cleanup-функція `return () => {...}` з useEffect.
  // Тут це окремий метод, а timer-id доводиться тягнути через поле класу.
  componentWillUnmount(): void {
    console.log(`Component unmounted ${this.intervalId}`)
    window.clearInterval(this.intervalId)
  }

  increment(): void {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div className="lifecycle-card">
        <p className="lifecycle-count">Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default Lifecycle
