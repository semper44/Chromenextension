/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
import ProgressBar from './ProgressBar';
import ProgressCircle from '../components/ProgressCircle';
import { MdArrowBack, MdClose } from "react-icons/md";

// import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { BottomSheet } from 'react-spring-bottom-sheet'
import { useNavigate } from 'react-router-dom';
const availableTokens = [
    {
        name: "HEDERA",
        completed: 30,
        pricing: 0.00001234,
        amount: 89.4
    },
    {
        name: "SHIBA",
        completed: 40,
        pricing: 0.00001234,
        amount: 66.4
    },
    {
        name: "CANON",
        completed: 50,
        pricing: 0.00001234,
        amount: 29.4
    },
    {
        name: "CREEPS",
        completed: 80,
        pricing: 0.00001234,
        amount: 56.4
    }
]
function Governance() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [filterTokens, setfilterTokens] = useState([]);
    const [showSendSheet, setShowSendSheet] = useState(false)
    function showFn() {
        setShow(!show);
    }

    useEffect(() => {
        setfilterTokens(availableTokens)
    }, [availableTokens])

    const showMatchedTokens = (event) => {
        const { value } = event.target;
        const matched = availableTokens.filter((token) => token.name.toLowerCase().includes(value.toLowerCase()))
        setfilterTokens(matched)
    }
  return (
      <MainLayout>
          <NavBar title="Governance" backArrow={<MdArrowBack size={18} />} />
          <GlobalStyling />
          <div className="w-full h-fit py-2 px-2">
              {/* <div className="uppercase text-xs text-white font-semibold tracking-wider pt-7">Proposals</div> */}
              {/* <div className="capitalize font-light  text-sm text-white  tracking-wider pt-3">List of proposals</div> */}
              <div className="border border-gray-300 text-white  rounded-full mt-3">
                  <input onKeyUp={showMatchedTokens} className='w-10/12 outline-none capitalize bg-transparent text-white h-10 rounded-md pl-3 ' placeholder='search...' />
              </div>
          </div>

          {/* distribution panel */}
          <div id='TOKENS' className='w-full py-2 px-4 flex items-center justify-between'>
              <p className=' flex items-center text-whtie font-bold text-[#fff]'>AVAILABLE TOKENS <p className='mx-1 px-[5px] rounded-[3px] bg-[#e7b3062a] text-[#ffc400] text-[12px]'>{availableTokens.length}</p>  </p>
              <div className='h-fit w-fit p-1 px-4 gap-2 transition-[.4s] flex items-center text-white hover:cursor-pointer hover:bg-[#191b1a] hover:scale-[0.95] border-[#545454] border-[2px] rounded-[10px]'></div>
          </div>

          <S.ScrollBar className='w-full h-[400px] flex flex-col items-center overflow-y-scroll'>
              <div className='flex w-full flex-col gap-2'>
                  {filterTokens.map((token) =>
                      <div onClick={() => setShowSendSheet(!showSendSheet)} className='h-[100px] w-full flex items-center p-[6px] border-[2px] border-[#2a2a2a] rounded-[20px] bg-[#121212] first-letter:first-line:marker:'>
                          <div className='h-[85px] w-[47px] flex items-center justify-center bg-[#232323] rounded-[15px]'>
                              <img src='../hederaImage.png' className='h-[30px] w-[30px] object-contain' />
                          </div>
                          <div className='flex flex-col flex-1 h-full'>
                              <div className="flex items-center justify-between px-3 text-white">
                                  <h1 className='font-bold'>{token.name} TOKEN</h1>
                                  <p className='text-[#b3b3b3] flex items-baseline font-bold'>$ <p className='text-[12px] ml-1 text-[#fff] font-bold'>{token.amount}</p> </p>
                              </div>
                              <div className='flex flex-1 items-center justify-center'>
                                  <div className='h-[90%] w-[94%] flex flex-col px-1 items-center bg-[#26262500] rounded-lg'>
                                      <ProgressBar completed={token.completed} value={70 / 100} />
                                      <div className='h-full w-full flex items-end text-white'>
                                          <p className='font-bold'>{token.pricing}</p> <p className='ml-[5px] text-[14px] text-[#27c9a6]'>HBAR</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </S.ScrollBar>

          <BottomSheet skipInitialTransition open={showSendSheet} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
              <div className='bg-[#000000] rounded-2xl'>
                  <div className='h-14 border-b border-b-slate-200 py-[1px] w-full flex items-center relative'>
                      <div onClick={() => setShowSendSheet(!showSendSheet)} className='absolute left-[15px] translate-y-[-50%] top-[50%] w-[30px] h-[30px] flex justify-center items-center border cursor-pointer border-slate-300/50 rounded-full '>
                          <MdClose size={20} className='text-white' />
                      </div>
                      <div className='flex-1 flex items-center justify-center text-center text-lg tracking-wider font-bold text-white'>VOTE</div>
                  </div>

                  <div className='h-[89px] w-full py-3 flex items-center justify-center'>
                      <p className='text-white'>WOULD YOU LIKE THIS FUTURE</p>
                  </div>

                  <div className='h-fit w-full pb-8 flex items-center justify-center'>
                      <div className="h-fit flex flex-col gap-[10px] w-[90%] text-white p-2 rounded-xl">
                          <button className='h-fit py-3 w-full rounded-lg bg-[#27c9a6]'>
                              UPVOTE
                          </button>
                          <button className='h-fit py-3 w-full rounded-lg bg-[#020f8a]'>
                              DOWNVOTE
                          </button>
                      </div>
                  </div>
              </div>
          </BottomSheet>
      </MainLayout>
  )
}

export default Governance

// ({<div className='text-blue-600/70 font-bold ' >{1}</div>})