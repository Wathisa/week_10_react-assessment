import { useState } from 'react'
import AdminSection from './components/AdminSection'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Owner from './components/Owner'
import UserSection from './components/UserSection'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [homeSection, setHomeSection] = useState('main')

  function handleNavigate(nextPage) {
    setPage(nextPage)

    if (nextPage === 'home') {
      setHomeSection('main')
    }
  }

  function handleSelectSection(section) {
    setPage('home')
    setHomeSection(section)
  }

  function renderPage() {
    if (page === 'owner') {
      return <Owner />
    }

    if (homeSection === 'user') {
      return <UserSection />
    }

    if (homeSection === 'admin') {
      return <AdminSection />
    }

    return <Home onSelectSection={handleSelectSection} />
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  )
}

export default App
