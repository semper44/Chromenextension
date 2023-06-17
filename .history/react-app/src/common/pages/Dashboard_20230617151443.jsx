/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'
import MainLayout from '../layout/MainLayout';
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";


function Dashboard() {
  const [saveUsersDetails , setSavedUsersDetails] =  useLocalStorage("usersDetails",{valueData:{} , isLoggedin:false}); 
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const data =  {usersAccount:saveUsersDetails.valueData.accountID}
    return await axios.post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}userDetails` ,data).then((returnedData) => returnedData.data);
  }


  const { isLoading, isError, data: queryUsersAccount, error, refetch } = useQuery({ queryKey: ['userAccounts'], queryFn: fetchAccount })
  console.log(queryUsersAccount) 

useEffect(()=>{
  (async()=>{ 
    if(Object.keys(saveUsersDetails.valueData).length == 0 && saveUsersDetails.isLoggedin == false){
      navigate('/login');
    }
  })()
},[saveUsersDetails])
const usersData = queryUsersAccount?.userAccountInfo;
  return (
      <MainLayout className="">
        { isLoading ?"loading..." :
          (<div className='flex justify-center flex-col w-full container items-center'>
          <div className='border min-h-[50px] border-orange-300 justify-center space-y-3 lg:justify-evenly items-center w-11/12 lg:w-11/12  rounded-full my-3 flex flex-row '>     
            <div className="text-xs w-fit text-center">{"Account Id:  "} <span className="font-semibold text-sm w-fit">{usersData.accountId}</span></div>
            <div className="text-xs w-fit text-center pb-4 ">{"Balances: "} <span className="font-semibold text-sm w-fit">{usersData.balance}</span></div>
            <div className="text-xs w-fit text-center capitalize pb-4 ">{"ledgerId: "} <span className="font-semibold text-sm w-fit">{usersData.ledgerId}</span></div>
          </div>
          <div className='border min-h-[50px] border-orange-300 justify-between flex-col items-center w-11/12 lg:w-9/12  rounded-full my-3 flex px-3'>     
            <div className="text-sm w-fit capitalize">{"maxAutomaticTokenAssociations:  "} <span className="font-semibold text-lg">{usersData.maxAutomaticTokenAssociations}</span></div>
            <div className="">{"ownedNfts: "} <span className="font-semibold text-xl">{usersData.ownedNfts}</span></div>
          </div>
          {/* proxyAccountId: null */}
          <div className= 'mt-5 w-full text-center font-semibold text-xl'>Account History</div>
          <div className='w-9/12 overflow-x-scroll  lg:w-full px-10 '>
              <table border>
                <thead>
                  <tr className=''>
                  <th rowSpan={2} className='capitalize  px-5'>proxyAccountId</th>
                  <th className='capitalize  px-5'>proxyReceived</th>
                  <th className='capitalize  px-5'>receiveRecordThreshold</th>
                  <th className='capitalize  px-5'>sendRecordThreshold</th>

                  </tr>
                </thead>
                 <tbody>
                    <tr>
                      <td className='text-center w-full px-5'>{(usersData.proxyAccountId == null)? "null" : usersData.proxyAccountId}</td>
                      <td className='text-center w-full px-5'>{ usersData.proxyReceived}</td>
                      <td className='text-center w-full px-5'>{ usersData.receiveRecordThreshold}</td>
                      <td className='text-center w-full px-5'>{ usersData.sendRecordThreshold}</td>
                        
                    </tr>
                 </tbody>

              </table>

          </div>
          </div>)

        }
        <div class
        {

        }
    </MainLayout>
  )
}

export default Dashboard