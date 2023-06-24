/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { LuStars } from "react-icons/lu";
import { GlobalStyling } from '../globalStyles/Global';
import { useNavigate } from 'react-router-dom';

function NavBar({ title = null, backArrow = null, to = "/" }) {
    const navigate = useNavigate();
    return (
        <div className='container h-fit w-full justify-between flex items-center py-2 px-2 border-b border-slate-300/20 '>
            <GlobalStyling />
            {
                (backArrow != null) ?
                    <div className='cursor-pointer text-[#00ffd9e3]' onClick={() => navigate(to)}>{backArrow}</div>
                    :
                    <div className='w-fit h-fit text-md font-bold'>CHASTE</div>
            }
            {(title != null) ?
                <div className='w-fit h-10 capitalize text-lg font-semibold  flex justify-between items-center px-2 text-white'>{title}</div>
                :
                <div className='w-fit h-10 border border-slate-300 rounded-full flex justify-between items-center px-2'><div ><img src="../hederaImage.png" className="h-6 w-6" /></div><select className='w-full outline-none bg-transparent text-sm font-semibold text-white '> <option className='text-sm text-white'>Hedera</option></select> </div>

            }
            <div className='w-10 h-10 flex justify-center items-center border border-slate-300 rounded-full cursor-pointer' onClick={() => alert("you clicked me")}>
                <LuStars size={22} color='gray' />
            </div>
        </div>
    )
}

export default NavBar