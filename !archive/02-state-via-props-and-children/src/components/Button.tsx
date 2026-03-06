interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  console.log(onClick)
  return <button onClick={onClick}>{children}</button>
}

export default Button
