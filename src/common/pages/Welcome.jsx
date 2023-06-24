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
      <S.ScrollBar className='w-full h-[90%]'>
        <GlobalStyling />
        <div className='h-[90%] w-full text-center relative'>
          <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold items-center py-4 px-2 border-b border-slate-300/20 text-white">
            Welcome to Project Wallet
          </div>
          <div className="tracking-wide font-semibold text-white text-[30px] pt-5 pb-3">Get started!</div>
          <div className=" text-sm tracking-wide font-semibold text-[#e5d420] bg-[#161616] rounded-lg p-2">
            Create  a new wallet or import existing wallet
          </div>
          <div className='h-fit w-full absolute bottom-0 flex flex-col justify-center items-center gap-3 '>
            <div onClick={() => navigate("/register")} className="w-[90%] h-fit py-3 px-3 rounded-md space-x-4 text-sm font-semibold tracking-wider text-white bg-[#03f38f] cursor-pointer">
              CREATE WALLET
            </div>
            <div className="w-[90%] h-fit py-3 px-2 rounded-md space-x-4 text-sm font-semibold tracking-wider text-white bg-[#2008fa] cursor-pointer">
              IMPORT WALLET
            </div>
          </div>
        </div>
      </S.ScrollBar>
    </MainLayout>

  )
}

export default Welcome