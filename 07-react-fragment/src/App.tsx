import { Fragment } from 'react'

const App = () => {
  return (
    // ! via fragment
    // <Fragment>
    //   <h1>Hello from React</h1>
    //   <h2>This is a subtitle</h2>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    // </Fragment>

    // ! via fragment
    <>
      <h1>Hello from React</h1>
      <h2>This is a subtitle</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </>

    // ! via div
    // <div>
    //   <h1>Hello from React</h1>
    //   <h2>This is a subtitle</h2>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    // </div>
  )
}

export default App
