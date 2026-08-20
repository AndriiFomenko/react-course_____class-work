interface ButtonProps {
  caption: string
  onClick: () => void
}

const Button = ({ caption, onClick }: ButtonProps) => {
  const buttonStyle = {
    margin: '10px'
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {caption}
    </button>
  )
}

export default Button
