import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'

export default function UserLabel() {
  const { username } = useContext(UsernameContext)
  return <p className="ctx-consumer">🏷️ Користувач: <strong>{username}</strong> (Level 3, useContext)</p>
}
