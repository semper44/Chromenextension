/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FaHome, FaChartArea, FaChartLine } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { GlobalStyling } from '../globalStyles/Global';
import { Link, useLocation  } from 'react-router-dom';
// import Activities from '../pages/Activities';
// 

function Footer() {
  const[nav, setNav] = useState(null)
    // const navigate = useNavigate();

    // Background script (background.js)
    const location = useLocation();
    const { pathname } = location;
    function activities(){
      setNav("activities")
      // navigate("/activities")
  }
  
  return (
    <div className={`${pathname == '/' && 'hidden'} ${pathname == '/seedphrasevalidation' && 'hidden'} w-[100%] h-fit py-1 flex items-center justify-center pop-up bg-[#0d0d0e00] bg-opacity-80 backdrop-filter rounded-[10px] absolute bottom-0 right-0`}>
      <GlobalStyling />
      <div className='h-full w-[98%] rounded-[10px] bg-[#121213] py-3 text-md font-base tracking-wide text-slate-700 flex flex-row justify-evenly items-center space-x-3'>
        <Link to={'/'}>
          <div className={`flex flex-col justify-center items-center cursor-pointer hover:opacity-75 space-y-1 ${pathname === '/' ? "text-[#00ff9d]" : "text-white"}`}>
            <div className='w-fit h-fit'><FaHome size={18} className={`${pathname === '/' ? "text-[#00ff9d]/90" : 'text-white'}`} /></div>
            <div className={`w-fit h-fit text-[10px] tracking-wide ${pathname === '/' ? "font-semibold" : ''}`}>Home</div>
          </div>
        </Link>
        <Link to={"/governance"}>
          <div className="flex flex-col justify-center  items-center hover:opacity-75 cursor-pointer space-y-1 text-white">
            <div className='w-fit h-fit '><FaChartArea size={18} className={`${pathname === '/governance' ? "text-[#00ff9d]/90" : 'text-white'}`} /></div>
            <div className={`w-fit h-fit text-[10px] tracking-wide ${pathname === '/governance' ? "text-[#00ff9d]/90" : 'text-white'}`}>Governance</div>
          </div>
        </Link>
        <Link to={"/NFTs"}>
          <div className="flex flex-col justify-center items-center hover:opacity-75 cursor-pointer space-y-1 text-white">
            <div className='w-fit h-fit'><FaChartLine size={18} className={`${pathname === '/NFTs' ? "text-[#00ff9d]/90" : 'text-white'}`} /></div>
            <div className={`w-fit h-fit text-[10px] tracking-wide ${pathname === '/NFTs' ? "text-[#00ff9d]/90" : 'text-white'}`}>NFTs</div>
          </div>
        </Link>
        <Link to={'/activities'}>
          <div className={`flex flex-col justify-center items-center  hover:opacity-75 cursor-pointer space-y-1 ${pathname === '/activities' ? "text-[#00ff9d]/90" : "text-white"}`}>
            <div className='w-fit h-fit'><MdFlashOn size={18} className={`${pathname === '/activities' ? "text-[#00ff9d]/90" : 'text-white'}`} /></div>
            <div className='w-fit h-fit text-[10px] tracking-wide'>Activity</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer