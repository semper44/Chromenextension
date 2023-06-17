/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout';
import { Global } from "../../module/globalStyles/GlobalStyles";
import InputsWithValidation from "../../module/inputs/InputsWithValidation";
import BigButton from "../../module/button/BigButton";

function Login() {
  return (
    <MainLayout>
      <Global />
      <form className="w-full my-6">
      <div  className="w-full text-center text-xl font-bold">Login Page</div>
              <InputsWithValidation
                inputName={"Enter Password"}
                  
              />
              <InputsWithValidation
                inputName={"Confirm Password"}
            
              />
              <BigButton
                buttonLabel={"next"}
              
              />
            </form>


    </MainLayout>
  )
}

export default Login;