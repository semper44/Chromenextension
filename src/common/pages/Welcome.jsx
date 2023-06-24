/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout'
import { GlobalStyling } from '../globalStyles/Global'
import * as S from "./style/Styles"
import { useNavigate } from 'react-router-dom'


function Welcome() {
  const navigate=useNavigate()

  return (
    <MainLayout>
        <S.ScrollBar className='w-full h-full'>
          <GlobalStyling />
            <div className='h-full w-full text-center relative'>
              <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold items-center py-4 px-2 border-b border-slate-300/20 text-white">
                Welcome to Project Wallet
              </div>
                <div className="tracking-wide font-semibold text-white text-lg pt-5 pb-3">Get started!</div>
                <div className=" text-sm tracking-wide font-semibold text-gray-200">Create  a new wallet or import existing wallet</div>
              <div className='h-fit w-full absolute bottom-8 flex flex-col justify-center items-center gap-3 '>
                <div onClick={()=>navigate("/register")} className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white bg-[#e11584]/90 cursor-pointer">
                  Create a new wallet
                </div>
                <div className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white bg-[#e11584]/90 cursor-pointer">
                  Import eisting wallet
                </div>
              </div>
            </div>
            </S.ScrollBar>
    </MainLayout>

  )
}

export default Welcome