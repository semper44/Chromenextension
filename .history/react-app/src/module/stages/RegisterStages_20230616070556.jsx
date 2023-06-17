/* eslint-disable no-unused-vars */
import React from 'react'
import * as S from './'

function RegisterStages() {
    return (
        <S.ListHolder className=' h-4 w-full flex justify-around items-center'>
            <S.Checkbox className="w-4 h-4 border border-orange-200" type='radio' checked/>
            <S.LineStage className='border border-orange-200 w-4/12' />
            <S.Checkbox className="w-4 h-4 border border-orange-200 bg-red-500" type='radio' checked />
              <S.LineStage className='border border-orange-200 w-4/12 ' />
            <S.Checkbox className="w-4 h-4 border border-orange-200" type='radio' checked/>
      </S.ListHolder>
       
  )
}

export default RegisterStages