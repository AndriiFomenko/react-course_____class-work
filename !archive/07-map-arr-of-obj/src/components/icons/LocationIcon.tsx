import type { FC, SVGProps } from 'react'

export const LocationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg className="contact-icon" viewBox="0 0 24 24" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export default LocationIcon
