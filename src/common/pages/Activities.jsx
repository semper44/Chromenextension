/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import MainLayout from '../layout/MainLayout';
import * as S from './style/Styles'
import NavBar from '../layout/NavBar';
import Nothing from './Nothing';
import { MdArrowBack, MdArrowUpward, MdArrowDownward } from "react-icons/md";
const defaultActivity = [
  {
    id: 0,
    type: "Sent",
    date: "2023-10-12 12:00:00",
    to: 'd6s7ds8d8f77yd87syhd87s87f8s7d',
    from: 'Mdsdh8s7d8s7dh8f7sdh87fshd87fe'
  },
  {
    id: 2,
    type: 'Recieved',
    date: "2030-10-11 10:00:00",
    to: 'Mdsdh8s7d8s7dh8f7sdh87fshd87fe',
    from: 'd6s7ds8d8f77yd87syhd87s87f8s7d'
  },
  {
    id: 3,
    type: 'Recieved',
    date: "2030-10-11 10:00:00",
    to: 'Mdsdh8s7d8s7dh8f7sdh87fshd87fe',
    from: 'd6s7ds8d8f77yd87syhd87s87f8s7d'
  },
  {
    id: 4,
    type: 'Sent',
    date: "2030-10-11 10:00:00",
    to: 'd6s7ds8d8f77yd87syhd87s87f8s7d ',
    from: 'Mdsdh8s7d8s7dh8f7sdh87fshd87fe'
  }
]

function Activities() {
  const [activities, setActivities] = useState(defaultActivity);

  return (
    <MainLayout>
      <NavBar title="Activity" backArrow={<MdArrowBack size={18} />} />
      <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
        {!activities ? (<Nothing msg1={"No activities yet"} />) :
          (
            <div className='h-3 w-full flex flex-col items-center gap-2 py-8'>
              {activities.map((activity) =>
                <div id='MAIN CONTAINER' className='flex flex-col h-fit hover:bg-[#ff00ea13] bg-[#161616] w-[95%] rounded-xl pt-3'>
                  <div className='flex justify-center text-xl items-center p-2 w-[50px]'>
                    {(activity.type == 'Recieved') && (
                      <MdArrowDownward size={20} className='text-[#27ffed] bg-[#292e32] rounded-full h-7 w-7 p-1' />
                    )}

                    {(activity.type == 'Sent') && (
                      <MdArrowUpward size={20} className='text-[#27ffed] bg-[#292e32] rounded-full h-7 w-7 p-1' />
                    )}
                  </div>

                  <div className='w-full h-fit flex flex-col gap-2 items-center justify-center'>
                    <p className='flex px-3 text-xs text-[#ff3f92] justify-between items-center w-full'>
                      <span className='font-bold'>
                        {(activity.type == 'Sent') ? 'TO' : 'FROM'} :
                      </span>
                      <span className={`ml-3 text-sm tracking-[0.5px] ${(activity.type == 'Sent') ? 'bg-[#f8121233] text-[#da2121]' : 'bg-[#12f89433] text-[#21da9c]'}  h-fit  px-2 rounded-[5px] w-[200px] truncate`}>
                        {(activity.type == 'Sent') ? activity.to : activity.from}
                      </span>
                    </p>
                    <p className='flex px-3 font-bold text-xs text-[#ff3f92] justify-between items-center w-full'>DATE :
                      <span className='ml-3 text-[#fff]'>
                        {activity.date}
                      </span>
                    </p>
                    <p className='w-full bg-[#000000] h-7 rounded-b-[10px] flex items-center'>
                      <p className='flex px-3 text-xs text-[#ffffff] justify-between items-center w-full'>OWNER
                        <span className='ml-3 text-[#9c9c9c] truncate tracking-[0.5px]'>
                          {(activity.type == 'Sent') ? activity.from : activity.to}
                        </span>
                      </p>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        }

      </S.ScrollBar>
    </MainLayout>
  )
}

export default Activities