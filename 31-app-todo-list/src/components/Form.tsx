import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Form = () => {
  const { addTodoHandler } = useContext(AppContext)
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim()) return
    addTodoHandler(title)
    setTitle('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your task" value={title} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
