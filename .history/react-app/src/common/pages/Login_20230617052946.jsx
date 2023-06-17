/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import MainLayout from '../layout/MainLayout';
import { Global } from "../../module/globalStyles/GlobalStyles";
import InputsWithValidation from "../../module/inputs/InputsWithValidation";
import BigButton from "../../module/button/BigButton";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

function Login() {
  const [getLogin , setGetLogin] = useState({password:"" , confirmPassword:""})

  // const fetchAccount = async () => {
  //   if(getLogin.password !== ""){

  //   }
  // }

  // const { isLoading, isError, data: logindetails, error, refetch } = useQuery({ queryKey: ['login'], queryFn: fetchAccount })

  const login = async()=>{
    console.log(isError , isLoading)
  if(getLogin.password !== "" && getLogin.confirmPassword !== "" && (getLogin.password == getLogin.confirmPassword)){
    const response =  await axios.post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}login`, {password:getLogin.password}).then((returnedData) => returnedData.data);
    const loginDetails = 
    console.log(logindetails)
  }
  }
  return (
    <MainLayout>
      <Global />
      <form className="w-full my-6">
      <div  className="w-full text-center text-xl font-bold">Login Page</div>
              <InputsWithValidation
                inputName={"Enter Password"}
                setInputValue={(e) =>
                  setGetLogin((previousData) => ({
                    ...previousData,
                    password: e.target.value,
                  }))}
                  
              />
              <InputsWithValidation
                inputName={"Confirm Password"}
                setInputValue={(e) =>
                  setGetLogin((previousData) => ({
                    ...previousData,
                    confirmPassword: e.target.value,
                  }))}
            
              />

              <BigButton
                buttonLabel={"Login"}
                isLoading={isLoading}
                isError={isError}
                buttonClick={() => login()}
              />
            </form>


    </MainLayout>
  )
}

export default Login;