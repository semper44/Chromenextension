/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { GlobalStyling } from '../globalStyles/Global'
import * as S from "./style/Styles"
import { useNavigate } from 'react-router-dom'
import { MdInfo} from "react-icons/md";
import useLocalStorage from "use-local-storage";
import { FiArrowLeft, FiEyeOff } from "react-icons/fi";



import CopyToClipboardButton from '../components/CopyToClipboardButton'

function SeedPhrase() {
    const [value] = useLocalStorage("usersDetails", undefined)
    const[copy, setCopy]= useState(false)
    const[seeSeedPhrase, setSeeSeedPhrase]=useState(false)
    const navigate=useNavigate()
    const {valueData}= value
    const splitted_seedphrase = valueData.seedPhrase.split(" ")



    const clipboard= ""
    
    // const words = arr.split(' ');


  return (
    <MainLayout>
        <S.ScrollBar className='w-full h-full'>
          <GlobalStyling />
            <div className='h-full w-full text-center relative'>
              <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold items-center py-3 px-2 border-b border-slate-300/20 text-white">
                Welcome to Project Wallet 
              </div>
              <div className="mt-3  h-fit w-full bg-[#fff3cd] rounded-md">
                <div className=" h-fit w-full flex items-center justify-center gap-1 text-[#856404] tracking-wide text-lg font-bold items-center  text-[#e11584]/90 pt-2 px-2">
                  Warning 
                  <div className='w-fit h-fit' id="my-tooltip" ><MdInfo size={18} className='text-black' /></div>
                </div>
                <div className="ml-2 mr-2 text-sm tracking-wide py-1 flex justify-start font-semibold text-[#856404]">
                Please write down your seedphrase and store it somewhere secure. 
                </div>
              </div>
                {seeSeedPhrase?<div className='w-full h-fit text-center'>
                    <div className='grid grid-cols-3 gap-4 pt-6'>
                      {splitted_seedphrase && splitted_seedphrase.map((word, index) =>( 
                        // {clipboard.concat("", word)}
                        <div className="border border-gray-500 text-white " key={index}>
                          {word}
                        </div>
                      ))}
                    </div>
                </div>:
                <div onClick={()=>setSeeSeedPhrase(true)} className='w-full h-[300px] flex items-center justify-center border mt-6'>
                   <FiEyeOff size={30} className="text-white/25 cursor-pointer" />
                </div>}
               
                <div className='h-fit w-full absolute bottom-3 flex flex-col justify-center items-center gap-3 '>
                    <div className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white border cursor-pointer border-[#e11584]/90 hover:bg-[#e11584]/90">
                    <CopyToClipboardButton  text={clipboard} value={"Copy seedphrase"}/>
                    </div>
                    <div onClick={()=>navigate("/seedphrasevalidation")} className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white cursor-pointer border border-[#e11584]/90 hover:bg-[#e11584]/90">
                    I wrote it down somwhere
                    </div>
                </div>
               
                {/* {copy&&<} */}
            </div>
            </S.ScrollBar>
    </MainLayout>

  )
}

export default SeedPhrase

