import { useSelector } from 'react-redux'
import { incrementAsync, decrementAsync, selectCounter, selectIsLoading } from '../redux/slices/counterSlice'
import { useAppDispatch } from '../redux/store'

export const Counter = () => {
  const count = useSelector(selectCounter)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      {isLoading && <p>Loading...</p>}
      <button onClick={() => dispatch(incrementAsync())} disabled={isLoading}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementAsync())} disabled={isLoading}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
