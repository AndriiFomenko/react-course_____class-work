import { Provider } from 'react-redux'
import Counter from './components/Counter'
import store from './redux/store'
import User from './components/User'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  )
}

export default App
