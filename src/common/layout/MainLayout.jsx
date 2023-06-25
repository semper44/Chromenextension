/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import * as S from './style/Styles'
// import NavBar from './NavBar'
import Footer from './Footer'

function MainLayout({children}) {
  return (
      <S.MainContainer className='container w-[360px] h-[600px]'>
          <div className='w-full h-full backdrop-blur-2xl bg-black/80'> 
          {children}
          <Footer />
          </div>
    </S.MainContainer>
  )
}

export default MainLayout