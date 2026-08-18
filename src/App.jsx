import './App.css'
import Home from './componant/Home'
import About from './componant/About'
import Contact from './componant/contact'
import Navbar from './componant/Navbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      {/* <Route path='/Menu' element={<Menu/>}/> */}
     </Routes>
     </BrowserRouter>         
    </>
  )
}

export default App
