import { useDispatch, useSelector } from 'react-redux'
import { incrementAsync, decrementAsync } from '../redux/actions'
import type { AppDispatch, RootState } from '../redux/types'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
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
