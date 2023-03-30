import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SimpleCard from './components/Auth/Login'
import SignupCard from './components/Auth/Register'
import CardWithIllustration from './components/Pages/Contact'
import Electronics from './components/Pages/Electronics'
import Jewellery from './components/Pages/Jewellery'
import MensClothing from './components/Pages/MensClothing'
import WomensClothing from './components/Pages/WomensClothing'
import Home from './Home'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<SimpleCard />}/>
      <Route path='/signup' element={<SignupCard />}/>
      <Route path='/electronics' element={<Electronics />}/>
      <Route path='/jewellery' element={<Jewellery />}/>
      <Route path='/mens' element={<MensClothing />}/>
      <Route path='/women' element={<WomensClothing />}/>
      <Route path='/contact' element={<CardWithIllustration />}/>
     </Routes>
      
      
    </div>
  )
}

export default App