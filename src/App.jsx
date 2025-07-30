import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
