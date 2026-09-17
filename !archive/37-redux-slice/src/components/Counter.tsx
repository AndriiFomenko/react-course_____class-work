import { useSelector } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/counterSlice'
import { selectCounter } from '../redux/slices/counterSlice'
import { useAppDispatch } from '../redux/store'

export const Counter = () => {
  const count = useSelector(selectCounter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
