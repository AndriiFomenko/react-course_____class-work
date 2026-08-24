import type { FC, SVGProps } from 'react'

export const GlobeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg className="contact-icon" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export default GlobeIcon
