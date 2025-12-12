import { type ChangeEvent, type FormEvent, useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { Context } from '../context/context'

const Form = () => {
  const [title, setTitle] = useState('')
  const { addTodo } = useContext(Context)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({ id: uuid(), title, completed: false })
    setTitle('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={title}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
