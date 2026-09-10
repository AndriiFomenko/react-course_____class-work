import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { RiDeleteBin2Line, RiRefreshLine, RiAddLine } from 'react-icons/ri'

const Menu = () => {
  const { restoreTodosHandler, clearAllCompletedTodosHandler, openAddModal } = useContext(AppContext)

  return (
    <nav>
      <button type="button" className="add-task-btn" onClick={openAddModal} title="Add new task">
        <RiAddLine /> Add task
      </button>
      <button type="button" onClick={restoreTodosHandler} title="Restore default todos">
        <RiRefreshLine /> Restore
      </button>
      <button type="button" onClick={clearAllCompletedTodosHandler} title="Clear all completed todos">
        <RiDeleteBin2Line /> Clear completed
      </button>
    </nav>
  )
}

export default Menu
