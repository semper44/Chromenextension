/* eslint-disable no-unused-vars */
import React from 'react'
import { MemoryRouter , Routes ,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Governance from '../pages/Governance'
import NotFound from '../pages/NotFound'
import Activities from '../pages/Activities'
import ProgressBar from "../pages/ProgressBar"
import SendHadera from '../pages/SendHadera'
import Nfts from '../pages/Nfts'

function MainRouter() {
  return (
      <MemoryRouter>
          <Routes>
              <Route path='/nn' element={<Home />} />
              <Route path='/activities' element={<Activities />} /> 
              <Route path='/send' element ={<SendHadera/>} /> 
              <Route path='/' element ={<Nfts/>} /> 
              {/* <Route path='/progress' element ={<ProgressBar/>} />  */}
              <Route path='/governance' element ={<Governance/>} /> 
          </Routes>
      </MemoryRouter>
  )
}

export default MainRouter