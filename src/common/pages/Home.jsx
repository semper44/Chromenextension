/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';

function Home() {

    const[show, setShow]=useState(false)

    function showFn(){
        setShow(!show)
    }
    const navigate = useNavigate();
  return (
      <MainLayout>
          <NavBar />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
              <GlobalStyling />
              <div className=' w-full  mt-2 rounded-lg relative'>
                  <div className='w-full h-fit space-y-6 '>
                      <div className="tracking-wider text-center text-4xl font-bold text-white pt-5">$0.00</div>
                      <div className="w-full flex justify-center items-center space-x-3">
                          <div className="border border-slate-200 w-fit flex flex-row px-2 py-2 rounded-full space-x-2"><span className="font-semibold text-sm text-white">{!show?"0x273...37463":"**************"}</span><span className=""><MdCopyAll size={18} color='#ffffff' /></span></div>
                           <div className="h-9 w-9 border border-slate-100 rounded-full flex justify-center items-center">{show?<MdRemoveRedEye size={18} color='#ffffff' className='cursor-pointer' onClick={showFn} />:<MdCopyAll size={18} color='#ffffff' className='cursor-pointer' onClick={showFn} />}</div>
                      </div>
                      <div className="flex justify-center items-center space-x-3">
                          <div className="cursor-pointer w-6/12 h-10 bg-[#e11584]/90 flex justify-center items-center py-1 px-3 rounded-md space-x-4">
                               <div className="h-fit w-fit"><MdDownload size={20} className='text-white' /></div>
                               <div className="w-fit h-fit text-md font-semibold tracking-wider text-white ">Deposit</div>
                          </div>
                          <div onClick={()=>navigate("/send")} className="cursor-pointer h-10 w-6/12 bg-[#e11584]/90 flex justify-center items-center py-1 px-3 rounded-md space-x-4">
                                    <div className="h-fit w-fit"><MdFileUpload  size={20}  className='text-white' /></div>
                              <div className="w-fit h-fit text-md font-semibold tracking-wider text-white">Send</div>
                            </div>
                      </div>

                   </div>

              </div>
              {/* distribution panel */}
              
              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4'>
                  <div className="w-full uppercase px-2 font-semibold flex justify-start items-center py-1 text-white">available Tokens ({<div className='text-blue-600/70 font-bold ' >{1}</div>})</div>
                   {/* items display section */}
                  <div className="w-full h-fit justify-center items-center mt-3">
                      <div className="w-full h-fit flex justify-between items-center">
                          <div className="flex flex-row justify-center items-center space-x-2">
                          <div className='h-fit w-fit'><img src="../hederaImage.png" className='h-10 w-10 rounded-full' /></div>
                          <div className="w-fit h-fit text-sm tracking-wide font-semibold text-white">Hedera Token</div>    

                          </div>
                          <div className="flex justify-center items-center space-x-2">
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold text-white">0.00</span>
                          </div>
                           
                      </div>
                      



                  </div>
                  <div className="w-full h-fit border-t border-t-slate-200 flex justify-start items-center py-2 mt-5">
                       <div className="uppercase text-xs text-white font-semibold tracking-wider">manage token</div>

                 </div>

              </div>
              
             
      {/* available token */}
     
{/*               
                 <div className='h-fit w-full backdrop-blur-lg bg-white/70 mt-4 rounded-lg px-4'>
                  <div className="w-full uppercase px-2 font-semibold flex justify-start items-center py-1">portfolio distribution</div> */}
                   {/* items display section */}
                  {/* <div className="w-full h-fit justify-center items-center mt-3">
                      <div className="w-full h-fit flex justify-between items-center">
                          <div className="flex flex-row justify-center items-center space-x-2">
                          <div className='h-fit w-fit'><img src="../hederaImage.png" className='h-10 w-10 rounded-full' /></div>
                          <div className="w-fit h-fit text-sm tracking-wide font-semibold">Hedera Token</div>    

                          </div>
                          <div className="flex justify-center items-center space-x-2">
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold">0.00</span>
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold">HBAR</span>
                          </div>
                           
                      </div>
                      



                  </div>
          </div> */}


          </S.ScrollBar>
    </MainLayout>
  )
}

export default Home