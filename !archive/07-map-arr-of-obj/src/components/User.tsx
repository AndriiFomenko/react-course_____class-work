import type { UserInterface } from '../types/user.interface'
import { MailIcon, PhoneIcon, GlobeIcon, LocationIcon } from './icons'

interface UserProps {
  user: UserInterface
}

const User = ({ user }: UserProps) => {
  const {
    id,
    name,
    username,
    email,
    phone,
    website,
    address: {
      city,
      street,
      suite,
      zipcode,
      geo: { lat, lng }
    },
    company: { name: companyName, catchPhrase, bs }
  } = user

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const formattedId = id < 10 ? `#0${id}` : `#${id}`

  return (
    <li className="user-card">
      <div className="card-header">
        <div className="card-avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="card-user-info">
          <h2 className="card-name">{name}</h2>
          <span className="card-username">@{username}</span>
        </div>
        <span className="card-id-badge">{formattedId}</span>
      </div>

      <div className="card-section">
        <span className="section-label">Contacts</span>
        <div className="contact-list">
          <a
            href={`mailto:${email}`}
            className="contact-item"
            title={`Send email to ${email}`}
          >
            <MailIcon />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className="contact-item"
            title={`Call ${phone}`}
          >
            <PhoneIcon />
            <span>{phone}</span>
          </a>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer noopener"
            className="contact-item"
            title={`Visit ${website}`}
          >
            <GlobeIcon />
            <span>{website}</span>
          </a>
        </div>
      </div>

      <div className="card-section">
        <span className="section-label">Address</span>
        <div className="address-card">
          <p className="address-main">
            {street}, {suite}
          </p>
          <p className="address-sub">
            {city}, {zipcode}
          </p>
          <div className="geo-tag">
            <LocationIcon />
            <span>
              Geo: {lat}, {lng}
            </span>
          </div>
        </div>
      </div>

      <div className="card-section company-card">
        <span className="section-label">Company</span>
        <h3 className="company-name">{companyName}</h3>
        <p className="company-phrase">"{catchPhrase}"</p>
        <span className="company-bs">{bs}</span>
      </div>
    </li>
  )
}

export default User
