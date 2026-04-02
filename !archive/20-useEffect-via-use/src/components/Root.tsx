import { Suspense } from 'react'
import Loading from './Loading'
import App from './App'

const Root = () => {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  )
}

export default Root
