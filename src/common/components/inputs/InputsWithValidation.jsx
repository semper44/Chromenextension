/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState} from 'react';
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
            <div className='flex w-11/12 lg:w-9/12 justify-start'>
            <S.Label className='text-[10px] pb-1 font-semibold text-white/40 tracking-wider'>{inputName}</S.Label>  
              </div>
            <S.Input onChange={setInputValue} className='w-[80%] h-7 outline-none text-sm px-1 border border-orange-200 rounded-sm' />
        </S.InputContainer>    
  )
}

export default InputsWithValidation