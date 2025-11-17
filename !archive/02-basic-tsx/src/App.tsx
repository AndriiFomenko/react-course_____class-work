import Button from './components/Button'
import Input from './components/Input'
import Header from './components/Header'
import Container from './components/Container'

const App = () => {
  console.log('App component rendered')
  return (
    <Container>
      <Header />
      <Input />
      <Button />
    </Container>
  )
}

export default App
