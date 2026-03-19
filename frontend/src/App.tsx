import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <AboutUs />}
      <Footer />
    </div>
  )
}

export default App
