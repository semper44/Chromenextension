/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import * as S from './style/Style'

function SmallInput({label="" , changeInput = null, readOnly=false , seedValue = "" , name}) {
    return (
        <div className="w-fit  m-1">
            {/* <S.Label className="text-[8px] font-bold">{label}</S.Label> */}
            {(label !== "")?
             <S.SmallInput value={label +"  "+seedValue} readOnly={readOnly}  className="text-[8px] outline-none border border-orange-200 h-5 w-fit lg:w-fit text-center rounded-sm"/>
                :
             <S.SmallInput  name={name}   onChange={changeInput} className="text-[8px] outline-none border border-orange-200 h-5 w-fit lg:w-fit text-center rounded-sm"/>
                
            }
      </div>

  )
}

export default SmallInput
