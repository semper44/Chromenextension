/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import React , {useState} from 'react';
import * as S from './style/Style'
import { Global } from '../globalStyles/GlobalStyles';

function NormalInput({ inputName = null, setInputValue = null }) {
    return (
        <S.InputContainer className='w-full flex my-2 justify-center items-center  flex-col'>
            <Global />
            <div className='flex w-11/12 lg:w-9/12 justify-start'>
            <S.Label className='text-[10px] pb-1 font-medium text-black/40'>{inputName}</S.Label>  
              </div>
            <S.Input onChange={(e)=>targetInput(e.target.value)} className='w-11/12 lg:w-9/12 h-7 outline-none text-sm px-1 border border-orange-200 rounded-sm' />
            <div className='py-1 text-red-600  font-light tracking-wide text-[12px]'>{errorHandling }</div>

        </S.InputContainer>    
  )
}

export default NormalInput;