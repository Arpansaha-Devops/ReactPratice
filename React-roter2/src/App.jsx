import {Routes,Route} from 'react-router-dom'
import './App.css'
import About from './About'
import Contact from './Contact'
import Home from './home'
import Navbar from './Navbar'

function App() {
 

  return (
    <>
<Navbar />

<Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

</Routes>
    </>
  )
}

export default App
