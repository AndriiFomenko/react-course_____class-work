import type { UserInterface } from '../types/user.interface'

type UserProps = Omit<UserInterface, 'address'>

const User = ({ id, name, email, username, phone, website, company }: UserProps) => {
  return (
    <div>
      <h2>
        {id}. {name}
      </h2>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>
        Company: {company.name} {company.catchPhrase} {company.bs}
      </p>
    </div>
  )
}

export default User
