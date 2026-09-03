import { Component } from 'react'
import Lifecycle from './Lifecycle'

// Навіть коли props не потрібні — перший дженерик `Component` все одно
// треба чимось заповнити (`object`). Тип state — окремий інтерфейс.
interface AppState {
  isShow: boolean
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props)
    this.state = { isShow: true }

    // Той самий ручний байндинг: без нього onClick впаде з
    // "Cannot read properties of undefined (reading 'setState')".
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(): void {
    this.setState((prevState) => ({ isShow: !prevState.isShow }))
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>18.1 — mount / update / unmount</h1>
          <p className="app-subtitle">
            Класова версія уроку №18. Відкрий консоль (F12) і натискай кнопки.
          </p>
        </header>

        <button onClick={this.handleToggle}>
          {this.state.isShow ? 'Unmount (сховати)' : 'Mount (показати)'}
        </button>

        {this.state.isShow ? <Lifecycle /> : null}

        <details className="compare">
          <summary>Чому класи складніші? (натисни, щоб розгорнути)</summary>
          <table>
            <thead>
              <tr>
                <th>Задача</th>
                <th>Функціональний (урок №18)</th>
                <th>Класовий (цей приклад)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Стан</td>
                <td>
                  <code>useState(0)</code> — 1 рядок
                </td>
                <td>
                  інтерфейс <code>LifecycleState</code> + <code>this.state</code> в{' '}
                  <code>constructor</code>
                </td>
              </tr>
              <tr>
                <td>Mount</td>
                <td>
                  <code>useEffect(fn, [])</code>
                </td>
                <td>
                  <code>componentDidMount()</code> — окремий метод
                </td>
              </tr>
              <tr>
                <td>Update по count</td>
                <td>
                  <code>useEffect(fn, [count])</code> — deps-масив
                </td>
                <td>
                  <code>componentDidUpdate(prevProps, prevState)</code> + ручне
                  порівняння <code>if (prevState.count !== ...)</code>
                </td>
              </tr>
              <tr>
                <td>Unmount / інтервал</td>
                <td>
                  <code>return () =&gt; clearInterval(id)</code> — id у замиканні
                </td>
                <td>
                  поле класу <code>intervalId</code> + окремий{' '}
                  <code>componentWillUnmount()</code>
                </td>
              </tr>
              <tr>
                <td>Обробники подій</td>
                <td>звичайні функції, байндинг не потрібен</td>
                <td>
                  <code>this.increment = this.increment.bind(this)</code> у
                  конструкторі, інакше <code>this === undefined</code>
                </td>
              </tr>
            </tbody>
          </table>
        </details>
      </div>
    )
  }
}

export default App
