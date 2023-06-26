/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
import InputsWithValidation from "../components/inputs/InputsWithValidation";
// import BigButton from "../../module/button/BigButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

function Login() {
  const [saveUsersDetails, setSavedUsersDetails] = useLocalStorage(
    "usersDetails",
    { valueData: {}, isLoggedin: false }
  );
  const [getLogin, setGetLogin] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (
        Object.keys(saveUsersDetails.valueData).length != 0 &&
        saveUsersDetails.isLoggedin == true
      ) {
        navigate("/home");
      }
    })();
  }, [saveUsersDetails]);

  const login = async () => {
    if (
      getLogin.password !== "" &&
      getLogin.confirmPassword !== "" &&
      getLogin.password == getLogin.confirmPassword
    ) {
      const response = await axios
        .post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}login`, {
          password: getLogin.password,
        })
        .then((returnedData) => returnedData.data);
      if (response.status == 0) {
        toast("🤝  User not found", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        //  true condition
        const datas = { valueData: response.data[0], isLoggedin: true };
        console.log(datas);
        setSavedUsersDetails(datas);
        // await navigate("/home")
        toast(
          `you are successfully logged-in as  ${response.data[0].nickname}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

      }
    }
  };
  return (
    <MainLayout>
    <GlobalStyling />
    <form className="w-full h-full">
      <div className=" h-fit w-full text-center text-rgb(0,123,255) tracking-wide text-lg font-bold py-3 px-2 border-b border-slate-300 text-white">
        LOGIN
      </div>

      <div className="text-sm mb-2 text-center tracking-wide font-semibold text-[#f3cb17] bg-[#161616] rounded-lg p-2">
        Please login to your account to continue with our application
      </div>
      
      <div className="w-full h-[390px] flex items-center justify-center flex-col">
          <InputsWithValidation
          inputName={"Enter Password"}
          setInputValue={(e) =>
              setGetLogin((previousData) => ({
              ...previousData,
              password: e.target.value,
              }))
          }
          />
          <InputsWithValidation
          inputName={"Confirm Password"}
          setInputValue={(e) =>
              setGetLogin((previousData) => ({
              ...previousData,
              confirmPassword: e.target.value,
              }))
          }
          />
        <div
          onClick={() => login()}
          className={"w-[90%] h-fit cursor-pointer mt-7 bg-[#03f584] py-[10px] px-3 rounded-md text-md font-semibold text-white text-center"}
        >
          LOGIN
        </div>
      </div>
    </form>
  </MainLayout>
  );
}

export default Login;
