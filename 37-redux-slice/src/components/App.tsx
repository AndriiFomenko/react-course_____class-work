import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Counter from './Counter'
import User from './User'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  )
}

export default App
