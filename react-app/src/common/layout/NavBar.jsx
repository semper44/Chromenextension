/* eslint-disable no-unused-vars */
import React from 'react'
import { Global } from '../../module/globalStyles/GlobalStyles'

function NavBar() {
  return (
      <div className='container flex justify-between items-center h-12 border-b border-b-slate-300'>
         <Global />
          <div className='text-xs font-bold tracking-wider '>HashKeeper</div>
          <div className='w-6/12 flex flex-row justify-between items-center'>
              <div className='text-[10px] font-semibold cursor-pointer'>Token</div>
              <div className='text-[10px] font-semibold cursor-pointer'>Sale/Buy</div>
               <div className='text-[10px] font-semibold cursor-pointer'>Swap</div>
              <div className='text-[10px] font-semibold cursor-pointer'>Nft</div>
        </div>

    </div>
  )
}

export default NavBar