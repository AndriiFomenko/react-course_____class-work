interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ children, onClick }: ButtonProps) => {
  const buttonStyle = {
    margin: '5px'
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
