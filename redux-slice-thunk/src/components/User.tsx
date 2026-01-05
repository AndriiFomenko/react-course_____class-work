import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAge,
  selectEmail,
  selectUsername,
  setUsername,
  setAge,
  setEmail
} from '../redux/userSlice'

const User = () => {
  const name = useSelector(selectUsername)
  const age = useSelector(selectAge)
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()

  const [data, setData] = useState({
    name: '',
    age: 0,
    email: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUsername(data.name))
    dispatch(setAge(data.age))
    dispatch(setEmail(data.email))
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, age: Number(e.target.value) })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value })
  }

  return (
    <div>
      <h1>Username: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Email: {email}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.name} onChange={handleNameChange} />
        <input type="text" value={data.age} onChange={handleAgeChange} />
        <input type="text" value={data.email} onChange={handleEmailChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User
