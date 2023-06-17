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
          (<div>
          <div className='border min-h-[50px] border-orange-300 justify-center lg:justify-between items-center w-11/12 lg:w-10/12  rounded-full my-3 flex flex-col lg:flex-row px-3'>     
            <div className="text-xs w-fit border text">{"Account Id:  "} <span className="font-semibold text-sm w-fit">{usersData.accountId}</span></div>
            <div className="text-xs w-fit">{"Balance: "} <span className="font-semibold text-sm w-fit">{usersData.balance}</span></div>
         
          </div>
          <div className='border min-h-[50px] border-orange-300 justify-between flex-col items-center w-11/12 lg:w-9/12  rounded-full my-3 flex px-3'>     
            <div className="text-sm">{"Account Id:  "} <span className="font-semibold text-lg">{}</span></div>
            <div className="">{"Balance: "} <span className="font-semibold text-xl">{}</span></div>
         
          </div>
          
          </div>)

        }
    </MainLayout>
  )
}

export default Dashboard