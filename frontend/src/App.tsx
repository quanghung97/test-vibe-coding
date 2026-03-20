import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'contact' && <Contact />}
      <Footer />
    </div>
  )
}

export default App
