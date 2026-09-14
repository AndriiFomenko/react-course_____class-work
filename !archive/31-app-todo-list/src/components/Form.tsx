import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Form = () => {
  const { addTodoHandler, updateTodoHandler, editingTodo, closeModal } = useContext(AppContext)
  const [title, setTitle] = useState<string>(editingTodo ? editingTodo.title : '')

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    if (editingTodo) {
      updateTodoHandler(editingTodo.id, trimmedTitle)
    } else {
      addTodoHandler(trimmedTitle)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="modal-form">
      <input
        autoFocus
        type="text"
        placeholder="Enter your task"
        value={title}
        onChange={handleChange}
      />
      <div className="modal-form-actions">
        <button type="button" className="cancel-btn" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          {editingTodo ? 'Save' : 'Add'}
        </button>
      </div>
    </form>
  )
}

export default Form
