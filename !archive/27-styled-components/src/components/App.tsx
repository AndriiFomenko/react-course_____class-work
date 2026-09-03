import { useState } from 'react'
import styled from 'styled-components'

const Header = styled.header<{ $accent: string }>`
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid ${(props) => props.$accent};
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const Button = styled.button<{ $accent: string; $large?: boolean }>`
  margin-top: 12px;
  margin-right: 8px;
  padding: ${(props) => (props.$large ? '14px 32px' : '10px 24px')};
  border: none;
  border-radius: 12px;
  font-size: ${(props) => (props.$large ? '16px' : '14px')};
  font-weight: 700;
  color: #020617;
  background: ${(props) => props.$accent};
  cursor: pointer;

  &:hover {
    filter: brightness(1.15);
  }
`

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      App
      <Header $accent="#22d3ee">
        <Title>Dynamic props in action</Title>
        <Button $accent="#22d3ee" onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </Button>
        <Button $accent="#f59e0b" $large>
          Large amber
        </Button>
      </Header>
    </div>
  )
}

export default App
