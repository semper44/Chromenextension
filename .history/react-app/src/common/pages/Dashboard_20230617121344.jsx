/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'
import MainLayout from '../layout/MainLayout';
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [saveUsersDetails , setSavedUsersDetails] =  useLocalStorage("usersDetails",{valueData:{} , isLoggedin:false});
 
  const navigate = useNavigate();
useEffect(()=>{
  (async()=>{  
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