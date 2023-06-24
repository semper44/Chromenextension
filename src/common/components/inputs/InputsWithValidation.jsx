/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style/Style'
import { GlobalStyling } from '../../globalStyles/Global';

function InputsWithValidation({ inputName = null, setInputValue = null }) {
  // const [errorHandling, setErrorHandling] = useState("");
  // const targetInput = (inputValue) => {
  //     if (inputValue == "") return setErrorHandling('Input can not be Empty');
  //     setErrorHandling("");
  //     setInputValue(inputValue) 
  // }
  return (
    <S.InputContainer className='w-full flex my-2 justify-center items-center  flex-col'>
      <GlobalStyling />
      <div className='flex w-[90%] justify-start'>
        <S.Label className='text-[14px] pb-1 font-semibold text-white tracking-wider'>{inputName}</S.Label>
      </div>
      <S.Input onChange={setInputValue} className='w-[90%] h-[50px] text-white px-3 bg-[#0f0f0f8f] border border-[#131313] rounded-lg py-4 outline-none' />
    </S.InputContainer>
  )
}

export default InputsWithValidation