import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Doc from './Components/Doc'
import Quill from './Pages/Quill'

function App() {

  return (
    
     <div className=''>
      <Routes>
        <Route path='/' element={<Doc/>}/>
        <Route path='/editDoc/:id' element={<Quill/>}/>

      </Routes>
     </div>
    
  )
}

export default App
