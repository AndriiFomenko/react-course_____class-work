# 18.1 — component mount / update / unmount (class component)

Класова версія уроку №18 (`!archive/18-component-mount-update-dismount`).
Функціональність 1-в-1 та сама, реалізація — повністю на класах.

Мета — показати наживо, наскільки класові компоненти багатослівніші
за функціональні: конструктор, `super(props)`, ручний `bind`,
три окремі методи життєвого циклу, ручне порівняння `prevState`,
поле класу для `intervalId` замість звичайного замикання.

## Як запустити

```bash
yarn install
yarn dev
```

## Що натискати (консоль F12 відкрита)

| Дія                          | Очікуваний лог у консолі                                  |
| ---------------------------- | --------------------------------------------------------- |
| Завантаження сторінки        | `constructor` → `Component mounted`                       |
| Кожна секунда                | `Interval tick ...` + `Component updated. Count is N`     |
| Кнопка `Increment`           | `Component updated. Count is N`                           |
| Кнопка `Unmount (сховати)`   | `Component unmounted ...` (інтервал зупиняється!)         |
| Кнопка `Mount (показати)`    | `constructor` → `Component mounted` (інтервал стартує знов)|

> Якщо інтервал НЕ зупиняється після unmount — `componentWillUnmount`
> написано неправильно. Це і є класичний витік памʼяті, який у хуках
> закривається одним `return () => clearInterval(id)`.

## Мапінг «функція → клас»

| Функціональний (урок №18)              | Класовий (цей приклад)                              |
| -------------------------------------- | --------------------------------------------------- |
| `useState(0)`                          | `interface State` + `this.state` у `constructor`    |
| `useEffect(fn, [])` (mount)            | `componentDidMount()`                               |
| `useEffect(fn, [count])` (update)      | `componentDidUpdate(prevProps, prevState)` + `if`   |
| cleanup `return () => clearInterval()` | `componentWillUnmount()` + поле `intervalId`        |
| звичайна функція-обробник              | метод + `this.increment = this.increment.bind(this)`|

Підсумок для студентів: **3 хуки ≈ 40 рядків** перетворюються на
**клас ≈ 80+ рядків** з `this`, байндингом і ручними перевірками.
