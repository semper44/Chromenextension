/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import * as S from './style/Styles';
import {SyncLoader} from 'react-spinners'

function BigButton({buttonLabel , buttonClick}) {
    return (
      <div className='w-full flex  justify-center items-center'> 
    
          <S.Button type='button' onClick={buttonClick} className=' w-11/12 lg:w-9/12 py-1 rounded-sm font-bold text-[10px] outline-none bg-orange-300 text-white capitalize  ' >{ buttonLabel}</S.Button>
      </div>
  )
}

export default BigButton