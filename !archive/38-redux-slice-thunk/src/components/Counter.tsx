import { useSelector } from 'react-redux'
import {
  incrementAsync,
  decrementAsync,
  triggerRejectAsync,
  reset,
  selectCounter,
  selectIsLoading,
  selectError
} from '../redux/slices/counterSlice'
import { useAppDispatch } from '../redux/store'

export const Counter = () => {
  const count = useSelector(selectCounter)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: '#ff4d4f' }}>Error: {error}</p>}
      <button onClick={() => dispatch(incrementAsync())} disabled={isLoading}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementAsync())} disabled={isLoading}>
        Decrement
      </button>
      <button onClick={() => dispatch(triggerRejectAsync())} disabled={isLoading}>
        Trigger Reject
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  )
}

export default Counter
