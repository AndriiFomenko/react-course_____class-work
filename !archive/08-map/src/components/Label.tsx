interface LabelProps {
  count: number
}

const Label = ({ count }: LabelProps) => {
  return <h1>Count: {count}</h1>
}

export default Label
