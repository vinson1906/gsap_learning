import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Route, Routes } from 'react-router-dom'
import FromTo from './components/from-to'
import Navbar from './components/navbar'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div className='overflow-hidden '>
      <p className='text-4xl font-bold text-purple-700 flex-center my-10'>welcome to GSAP! Animation..</p>
      <Navbar />
      <Routes>
        <Route path='/from-to' element={<FromTo />} />
      </Routes>
    </div>

  )
}

export default App