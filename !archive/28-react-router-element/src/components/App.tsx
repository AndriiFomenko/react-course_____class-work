import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Navbar from './Navbar'
import Footer from './Footer'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
