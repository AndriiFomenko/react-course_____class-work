import Button from './components/Button'

const App = () => {
  return (
    <div>
      <h1>Reusable Components</h1>
      <Button isDisabled={true} type="button">
        Click me
      </Button>
      <Button isDisabled={false} type="submit">
        Submit
      </Button>
      <Button isDisabled={true} type="reset">
        Reset
      </Button>
    </div>
  )
}

export default App
