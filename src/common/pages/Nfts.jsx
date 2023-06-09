/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
// import Footer from './Footer'
import { GlobalStyling } from '../globalStyles/Global'
// import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';
import Nothing from './Nothing';
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Tooltip } from 'react-tooltip'
import { MdArrowBack, MdClose ,MdRemoveRedEye, MdAddCircle , MdRemoveCircle} from "react-icons/md";


function Nfts() {
    const[show, setShow]=useState(false)
    const[link, setLink]=useState("all")
    const[data, setData]=useState("all")


    const navigate = useNavigate();
  return (
      <MainLayout>
          <NavBar title="NFTs" backArrow={<MdArrowBack size={18} />}  />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll pl-4'>
              <GlobalStyling />
              {data?.length>=1&&<div className="w-full h-fit py-2 flex item-center justify-between">
                <div onClick={()=>{setLink("all")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="all" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>NFTs</div>
                <div onClick={()=>{setLink("create")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="create" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>Yours</div>
                <div onClick={()=>{setLink("create")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="create" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>Create</div>
              </div>}

              {/* distribution panel */}
              
              {data?.length>=1?
              <>
              <div onClick={()=>setShow(true)} className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 cursor-pointer '>
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
                </div> 

              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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

              </div>
              <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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
              </div></>:<Nothing msg1={"No Nfts yet"} msg2={"Add NFT"}/>}
                
              <BottomSheet skipInitialTransition open={show} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
                <div className='w-full h-full backdrop-blur-2xl bg-black/80 px-2'>     
                    <div  className='h-14 w-full flex items-center '>
                        <div onClick={()=>setShow(false)} className='w-8 p-2 h-8 ml-1 mr-14 flex justify-center items-center border border-slate-300/50 rounded-full '><MdClose size={20} className='text-white cursor-pointer' /></div>                    
                    </div>
                    <div className='w-full flex item-center justify-item gap-3'>
                        <div className='h-fit w-1/2'><img src="../hederaImage.png" className='h-full w-20 rounded-xl' /></div>
                        <div className='grid py-2 gap-2'>
                            <div className=" text-sm tracking-wide font-semibold text-white">Owned by<span className="pl-2 text-[#e11584]/90 tracking-wide text-lg font-bold">you</span></div>    
                            <div className=''> 
                            <div className='w-full flex item-center justify-center gap-5' >
                                <div className='text-white'><MdRemoveRedEye /></div>
                                <div className="w-fit h-fit text-white">0</div>
                                <div className='text-white'><MdRemoveRedEye /></div>
                                <div className="w-fit h-fit text-white">0</div>
                            </div>
                            <div className=" text-sm tracking-wide font-semibold text-white">Floor Price<span className="pl-2 text-[#e11584]/90 tracking-wide text-lg font-bold">0.00</span></div>    
                            <div className=" text-sm tracking-wide font-semibold text-white">Floor Sale<span className="pl-2 text-[#e11584]/90 tracking-wide text-lg font-bold">0.00</span></div>    

                            </div>
                        </div>
                    </div>

                </div>
            </BottomSheet>
          </S.ScrollBar>
    </MainLayout>
  )
}

export default Nfts

