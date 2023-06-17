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
    return await axios.get(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}userDetails`).then((returnedData) => returnedData.data);
  }

  const { isLoading, isError, data: queryUsersAccount, error, refetch } = useQuery({ queryKey: ['usersAccount'], queryFn: fetchAccount })


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
          <div className='border min-h-[50px] border-orange-300 w-full rounded-full my-3'>     
          </div>
    </MainLayout>
  )
}

export default Dashboard