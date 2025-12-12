import Form from './components/Form'
import Todos from './components/Todos'
import Actions from './components/Actions'
import Provider from './components/Provider'

const App = () => {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Actions />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
