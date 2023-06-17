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
              <InputsWithValidation
                inputName={"Enter Email"}
                setInputValue={(e) =>
                  setRegister((previousData) => ({
                    ...previousData,
                    email: e.target.value,
                  }))
                }
              />
              <InputsWithValidation
                inputName={"Enter Password"}
                setInputValue={(e) =>
                  setRegister((previousData) => ({
                    ...previousData,
                    password: e.target.value,
                  }))
                }
              />
              <InputsWithValidation
                inputName={"Confirm Password"}
                setInputValue={(e)=>setConfirmPassword(e.target.value)}
              />
              <BigButton
                buttonLabel={"next"}
                isLoading={isLoading}
                isError={isError}
                buttonClick={() => submitAndNavigate()}
              />
            </form>


    </MainLayout>
  )
}

export default Login;