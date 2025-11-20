import type { UserInterface } from '../types/user.interface'

const User = ({ id, name, email, username, phone }: UserInterface) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}

export default User
