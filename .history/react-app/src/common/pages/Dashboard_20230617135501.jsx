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

useEffect(()=>{
  (async()=>{ 
    console.log(queryUsersAccount) 
    if(Object.keys(saveUsersDetails.valueData).length == 0 && saveUsersDetails.isLoggedin == false){
      navigate('/login');
    }
  })()
},[saveUsersDetails])
  return (
      <MainLayout className="">
        { isLoading ?"loading..." :
          (<div className='border min-h-[50px] border-orange-300 justify-center items-center w-full rounded-full my-3 flex flex-row'>     
            <div className="text-xl font-">{"Account Id:  " + queryUsersAccount.userAccountInfo.accountId}</div>
         
          </div>)

        }
    </MainLayout>
  )
}

export default Dashboard