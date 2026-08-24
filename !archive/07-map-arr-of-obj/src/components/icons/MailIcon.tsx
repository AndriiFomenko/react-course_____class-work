import type { FC, SVGProps } from 'react'

export const MailIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg className="contact-icon" viewBox="0 0 24 24" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default MailIcon
