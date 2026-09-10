import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

const Menu = () => {
  const { restoreTodosHandler, clearAllCompletedTodosHandler } = useContext(AppContext)

  return (
    <nav>
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
