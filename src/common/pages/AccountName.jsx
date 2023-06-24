/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout'
import { GlobalStyling } from '../globalStyles/Global'
import * as S from "./style/Styles"
import { useNavigate } from 'react-router-dom';


function AccountName() {
    const navigate=useNavigate()

  return (
    <MainLayout>
    <S.ScrollBar className='w-full h-full'>
      <GlobalStyling />
            <div className='h-full w-full text-center relative'>
              <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold items-center py-8 px-2 border-b border-slate-300/20 text-white">
                Account Name              
                </div>
              <div className=" text-sm tracking-wide py-10 mt-10 flex justify-start font-semibold  text-gray-200">
                Please choose an account name, or click on the skip buton to skip 
                </div>
                <input className='w-[80%] pt-10 outline-none bg-transparent text-white  border-b ' placeholder='Choose a name'/>
                <div className='h-fit w-full absolute bottom-12 mb-12 flex flex-col justify-center items-center gap-3 '>
                    <div onClick={()=>navigate("/")} className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white cursor-pointer border border-[#e11584]/90 hover:bg-[#e11584]/90">
                    Skip
                    </div>
                </div>
                <div className='h-fit w-full absolute bottom-12 flex flex-col justify-center items-center gap-3 '>
                    <div onClick={()=>navigate("/")} className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white cursor-pointer border border-[#e11584]/90 hover:bg-[#e11584]/90">
                    Continue
                    </div>
                </div>
               
                {/* {copy&&<} */}
            </div>  
            </S.ScrollBar>
    </MainLayout>
    )
}

export default AccountName