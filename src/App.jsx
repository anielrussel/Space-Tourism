import { Route, Routes } from 'react-router-dom'
import './App.css'
import Technology from './components/technology/Technology'
import Crew from './components/crew/Crew'
import Destination from './components/destination/Destination'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
