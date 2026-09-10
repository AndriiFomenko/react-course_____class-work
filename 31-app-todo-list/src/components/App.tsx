import Menu from './Menu'
import Todos from './Todos'
import Modal from './Modal'

const App = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <Menu />
      <Todos />
      <Modal />
    </div>
  )
}

export default App
