import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Plants from "./pages/Plants"




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
         
        </Routes>
      </Router>
    </>
  )
}

export default App
