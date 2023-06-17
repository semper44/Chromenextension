/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout';
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [saveUsersDetails , setSavedUsersDetails] =  useLocalStorage("usersDetails",{valueData:{} , isLoggedin:false});
 
  const navigate = useNavigate();
useEffect(()=>{
  (async()=>{  
    if(Object.keys(saveUsersDetails.valueData).length != 0 && saveUsersDetails.isLoggedin == true){
      navigate('/dashboard');
    }

  })()


},[saveUsersDetails])
 
 
 
  return (
      <MainLayout>
          <div className=''>
              
          </div>
    </MainLayout>
  )
}

export default Dashboard