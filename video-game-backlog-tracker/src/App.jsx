import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Stats from './pages/Stats'
import Wheelspin from './pages/Wheelspin'

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/wheelspin" element={<Wheelspin />} />
        </Routes>
    </div>
  )
}

export default App
