import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// ! action types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// ! action creators
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

// ! reducer
const counterReducer = (state: number = 0, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// ! store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// ! component
const Counter = () => {
  const count = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

// ! app provider
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
