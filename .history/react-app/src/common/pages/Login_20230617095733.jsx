/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import MainLayout from '../layout/MainLayout';
import { Global } from "../../module/globalStyles/GlobalStyles";
import InputsWithValidation from "../../module/inputs/InputsWithValidation";
import BigButton from "../../module/button/BigButton";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "use-local-storage";


function Login() {
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
  const [saveUsersDetails , setSavedUsersDetails] =  useLocalStorage("usersDetails",{});
  const [getLogin , setGetLogin] = useState({password:"" , confirmPassword:""})

  // const fetchAccount = async () => {
  //   if(getLogin.password !== ""){

  //   }
  // }

  // const { isLoading, isError, data: logindetails, error, refetch } = useQuery({ queryKey: ['login'], queryFn: fetchAccount })

  const login = async()=>{
  if(getLogin.password !== "" && getLogin.confirmPassword !== "" && (getLogin.password == getLogin.confirmPassword)){
    const response =  await axios.post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}login`, {password:getLogin.password}).then((returnedData) => returnedData.data);
   if(response.status == 0){
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

   }else{

  //  true condition
setSavedUsersDetails



   }
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
                buttonClick={() => login()}
              />
            </form>


    </MainLayout>
  )
}

export default Login;