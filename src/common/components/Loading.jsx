import React from 'react'
import {motion} from "framer-motion"


function Loading() {
  return (
    <div className='w-full h-[200px] backdrop-filter backdrop-blur-xl bg-[#121213] flex items-center z-[1] overflow-hidden '>
        <motion.div className='backdrop-filter backdrop-blur-xl bg-[#232323] rounded-md p-5 text-white  ' initial={{ marginLeft: 0  }} animate={{ marginLeft: "100%" }} transition={{repeat:Infinity,duration: 4 }}>
        Loading
        </motion.div>
    </div>
  )
}

export default Loading