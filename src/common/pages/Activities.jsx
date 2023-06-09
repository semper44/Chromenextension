/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout';
import * as S from './style/Styles'
import NavBar from '../layout/NavBar';
import Nothing from './Nothing';
import { MdArrowBack} from "react-icons/md";


function Activities() {
  return (
      <MainLayout>
          <NavBar title="Activity" backArrow={<MdArrowBack size={18}  />} />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
          <Nothing msg1={"No activities yet"}/>
          </S.ScrollBar>
    
    </MainLayout>
  )
}

export default Activities