/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
import { MdArrowBack } from "react-icons/md";
import ProgressBar from './ProgressBar';
// import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';

function Governance() {
    const[show, setShow]=useState(false)

    function showFn(){
        setShow(!show)
    }
    const navigate = useNavigate();
  return (
      <MainLayout>
          <NavBar title="Governance" backArrow={<MdArrowBack size={18} />}  />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll pl-4'>
              <GlobalStyling />
              <div className="w-full h-fit py-2">
                <div className="uppercase text-xs text-white font-semibold tracking-wider pt-7">Proposals</div>
                <div className="capitalize font-light  text-sm text-white  tracking-wider pt-3">List of proposals</div>
                <div className="border border-gray-300 text-white  rounded-full mt-3">
                <input className='w-10/12 outline-none capitalize bg-transparent text-white h-10 rounded-md pl-3 ' placeholder='search...'/>

                </div>
              </div>

              {/* distribution panel */}
              
              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold text-blue-600/90">HBAR</span>
                          </div>
                      </div>
                      <div className="pt-3"><ProgressBar bgcolor={"[#e11584]/90"} completed={35} value={70/100}/> </div>                                  
                  </div>
                  <div className="w-full h-fit border-t border-t-slate-200 flex justify-start items-center pt-1 mt-5">
                 </div> 

              </div>
              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold text-blue-600/90">HBAR</span>
                          </div>
                      </div>
                      {/* <div className="pt-3"><ProgressBar bgcolor={"[#e11584]/90"} completed={60}/> </div>                                   */}
                  </div>
                  <div className="w-full h-fit border-t border-t-slate-200 flex justify-start items-center pt-1 mt-5">
                 </div> 

              </div>
              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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
                              <span className="w-fit h-fit text-sm tracking-wide font-semibold text-blue-600/90">HBAR</span>
                          </div>
                      </div>
                      {/* <div className="pt-3"><ProgressBar bgcolor={"[#e11584]/90"} completed={60}/> </div>                                   */}
                  </div>
                  <div className="w-full h-fit border-t border-t-slate-200 flex justify-start items-center pt-1 mt-5">
                 </div> 

              </div>
      
          </S.ScrollBar>
    </MainLayout>
  )
}

export default Governance