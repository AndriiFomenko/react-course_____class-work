import { useDispatch, useSelector } from 'react-redux'
import { incrementAsync, decrementAsync } from '../redux/actions'
import { selectCounter } from '../redux/selectors'
import type { AppDispatch } from '../redux/store'

export const Counter = () => {
  const count = useSelector(selectCounter)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
