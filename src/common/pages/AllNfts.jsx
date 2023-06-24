/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
// import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';
import Nothing from './Nothing';
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Tooltip } from 'react-tooltip'
import ProgressBar from './ProgressBar';
import { MdArrowBack, MdClose ,MdRemoveRedEye, MdAddCircle , MdRemoveCircle} from "react-icons/md";


function AllNfts({category, loading}) {
    const[show, setShow]=useState(false)
    const[link, setLink]=useState("all")
    const[data, setData]=useState("all")

    console.log(loading);

    const navigate = useNavigate();
  return (
    <>
        {/* distribution panel */}
        {!loading && <div className='h-fit w-full'>
        {data.length>=1? <div className='h-fit w-full  grid grid-cols-2  gap-3 rounded-lg mt-6  '>
       <div className='cursor-pointer h-[220px] w-full grid items-center justify-center pop-up bg-black/60 bg-opacity-80 backdrop-filter rounded-lg '>
         {/* items display section */}
                  <div className='h-fit w-full'><img src="../hederaImage.png" className='h-40 w-full rounded-full' /></div>
                <div className="text-center space-x-2">
                  <div className="w-full  text-sm tracking-wide font-semibold text-white">Hedera Token</div>    
                    <span className="w-fit h-fit text-sm tracking-wide font-semibold text-white">0.00</span>
                </div>
        </div>
        </div>:<Nothing msg1={"No Nfts yet"} msg2={"Add NFT"}/> }
        </div>}
    </>

    )
}

export default AllNfts
{/* </div> : */}


{/* <div className='h-fit w-full  pop-up bg-black/60 bg-opacity-80 backdrop-filter  rounded-lg p-4 mt-4 px-4 '>
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
        </div> */}