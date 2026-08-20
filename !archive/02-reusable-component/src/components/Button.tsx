interface ButtonProps {
  caption: string
  title: string
}

const Button = ({ caption, title }: ButtonProps) => {
  return (
    <div>
      <button
        style={{
          margin: '10px'
        }}
        title={title}
      >
        {caption}
      </button>
    </div>
  )
}

export default Button
