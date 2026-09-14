import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/actions'
import { selectCounter } from '../redux/selectors'

export const Counter = () => {
  const count = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
