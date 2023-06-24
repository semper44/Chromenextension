import React from 'react';
import { motion } from "framer-motion"
import { MdClose } from 'react-icons/md';
function SingleNft({ items, setShow, setShowInput, showInput }) {
  return (
    <div>
      <div className='w-full h-full backdrop-blur-2xl bg-black/80 px-2 pt-3 pb-5'>
        <div className='h-fit w-full flex items-center '>
          <div onClick={() => { setShow(false); setShowInput(false) }} className='w-8 p-2 h-8 ml-1 mr-14 flex justify-center items-center border border-slate-300/50 rounded-full '>
            <MdClose size={20} className='text-white cursor-pointer' />
          </div>
        </div>
        <div className='h-fit w-full text-center'>
          <div className='w-full flex justify-center'>
            <img src="../hederaImage.png" className='h-20 w-20 rounded-xl' />
          </div>
          <div className=" text-sm tracking-wide font-semibold text-gray-200">Bored APe Yatcht<span className="pl-2 text-rgb(0, 123, 255) tracking-wide text-lg font-bold">you</span></div>
          <div className=" text-sm tracking-wide font-semibold text-gray-200">Owned by<span className="pl-2 text-rgb(0, 123, 255) tracking-wide text-lg font-bold">you</span></div>
          <div className=" text-sm tracking-wide font-semibold text-gray-200">Floor Price<span className="pl-2 text-rgb(0, 123, 255) tracking-wide text-lg font-bold">0.00</span></div>
          <div className=" text-sm tracking-wide font-semibold text-gray-200">Floor Sale<span className="pl-2 text-rgb(0, 123, 255) tracking-wide text-lg font-bold">0.00</span></div>
          {!showInput && <motion.div className='w-full flex justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <div onClick={() => setShowInput(!showInput)} className="w-[80%] h-fit text-md  font-semibold tracking-wider text-white bg-[#e11584]/90 mb-3 mt-2 p-3 rounded-md cursor-pointer">Swap</div>
          </motion.div>}
        </div>
        {showInput && <><div className='w-full flex justify-center pt-3'>
          <input className='w-[80%] pt-4 pb-4 outline-none capitalize bg-transparent text-white h-10 rounded-md pl-3 border border-slate-300/50' placeholder='Enter amount' />
        </div>
          <div className='w-full flex justify-center'>
            <div onClick={() => setShowInput(!showInput)} className="w-[80%] h-fit text-md  font-semibold tracking-wider text-white bg-[#e11584]/90 mb-3 mt-2 p-3 rounded-md text-center cursor-pointer">Swap</div>
          </div>
        </>}
      </div>
    </div>
  )
}

export default SingleNft