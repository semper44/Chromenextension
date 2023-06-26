/* eslint-disable no-unused-vars */
import React from 'react'
import { MemoryRouter , Routes ,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Governance from '../pages/Governance'
import NotFound from '../pages/NotFound'
import Activities from '../pages/Activities'
import SendHadera from '../pages/SendHadera'
import Nfts from '../pages/Nfts'
import Welcome from '../pages/Welcome'
import SeedPhrase from '../pages/SeedPhrase'
import Register from '../pages/Register'
import AccountName from '../pages/AccountName'
import SeedPhraseValidation from '../pages/SeedPhraseValidation'
import Charts from '../components/Charts'
import Login from '../pages/Login'
import NftSwap from '../pages/NftSwap'
import IInput from '../pages/IInput'
function MainRouter() {
  return (
      <MemoryRouter>
          <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/chart' element={<Charts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/nftswap' element={<NftSwap/>} />
              {/* <Route path='/nn' element={<IInput />} /> */}
              <Route path='/home' element={<Welcome />} />
              <Route path='/register' element={<Register />} />
              <Route path='/seedphrase' element={<SeedPhrase />} />
              <Route path='/seedphrasevalidation' element={<SeedPhraseValidation />} />
              {/* <Route path='/accountname' element={<AccountName />} /> */}
              <Route path='/activities' element={<Activities />} /> 
              <Route path='/send' element ={<SendHadera/>} /> 
              <Route path='/nfts' element ={<Nfts/>} /> 
              {/* <Route path='/progress' element ={<ProgressBar/>} />  */}
              <Route path='/governance' element ={<Governance/>} /> 
          </Routes>
      </MemoryRouter>
  )
}

export default MainRouter