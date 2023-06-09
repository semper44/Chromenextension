/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FaHome, FaChartArea, FaChartLine } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { GlobalStyling } from '../globalStyles/Global';
import { Link, useLocation  } from 'react-router-dom';
// import Activities from '../pages/Activities';
// 

function Footer() {
  const[nav, setNav]=useState(null)
    // const navigate = useNavigate();

    // Background script (background.js)
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
    function activities(){
      setNav("activities")
      // navigate("/activities")
    }

    console.log(nav);
  return (
      <div className='w-full h-fit pop-up bg-black/60 bg-opacity-80 backdrop-filter py-3 flex justify-center items-center rounded-tr-xl rounded-tl-xl absolute bottom-0 right-0'>
          <GlobalStyling />
          <div className='h-full w-full text-md font-base tracking-wide text-slate-700 flex flex-row justify-evenly items-center space-x-7'>
              <Link to={'/'}>
                <div className={`flex flex-col justify-center items-center cursor-pointer hover:opacity-75 space-y-2 ${pathname==='/'?"text-[#e11584]/90":"text-white"}`}>
                  <div className='w-fit h-fit'><FaHome size={18} className={`${pathname==='/'?"text-[#e11584]/90":'text-white'}`} /></div>
                <div className='w-fit h-fit text-md font-semibold tracking-wide'>Home</div>
                </div> 
              </Link>  
              <Link to={"/governance"}>
                <div className="flex flex-col justify-center  items-center hover:opacity-75 cursor-pointer space-y-2 text-white">
                  <div className='w-fit h-fit '><FaChartArea size={18} className={`${pathname==='/governance'?"text-[#e11584]/90":'text-white'}`}/></div>
                    <div className={`w-fit h-fit text-md font-semibold tracking-wide ${pathname==='/governance'?"text-[#e11584]/90":'text-white'}`}>Governance</div>
                </div> 
              </Link>
              <Link to={"/NFT"}>
                <div className="flex flex-col justify-center items-center hover:opacity-75 cursor-pointer space-y-2 text-white">
                  <div className='w-fit h-fit'><FaChartLine size={18} className={`${pathname==='/NFT'?"text-[#e11584]/90":'text-white'}`} /></div>
                <div className={`w-fit h-fit text-md font-semibold tracking-wide ${pathname==='/NFT'?"text-[#e11584]/90":'text-white'}`}>NFTs</div>
                </div> 
               </Link>
              <Link to={'/activities'}>
                <div className={`flex flex-col justify-center items-center  hover:opacity-75 cursor-pointer space-y-2 ${pathname==='/activities'?"text-[#e11584]/90":"text-white"}`}>
                  <div className='w-fit h-fit'><MdFlashOn size={18} className={`${pathname==='/activities'?"text-[#e11584]/90":'text-white'}`} /></div>
                <div className='w-fit h-fit text-md font-semibold tracking-wide'>Activity</div>
                </div> 
               </Link>
          </div>
    </div>
  )
}

export default Footer