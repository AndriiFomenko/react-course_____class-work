import { useState } from 'react'

interface FormProps {
  addTodoHandler: (title: string) => void
}

const Form = ({ addTodoHandler }: FormProps) => {
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
