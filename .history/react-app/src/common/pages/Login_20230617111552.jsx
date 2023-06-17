/* eslint-disable no-unused-vars */
import React , {useState , useEffect} from 'react'
import MainLayout from '../layout/MainLayout';
import { Global } from "../../module/globalStyles/GlobalStyles";
import InputsWithValidation from "../../module/inputs/InputsWithValidation";
import BigButton from "../../module/button/BigButton";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [saveUsersDetails , setSavedUsersDetails] =  useLocalStorage("usersDetails",{valueData:{} , isLoggedin:false});
  const [getLogin , setGetLogin] = useState({password:"" , confirmPassword:""})
  const navigate = useNavigate();
useEffect(()=>{
  (async()=>{  
    if(Object.values(saveUsersDetails).length != 0 && loggedIn == true){
      navigate('/dashboard');
    }



  })()



},[])
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
 
setSavedUsersDetails({valueData:response.data[0] , isLoggedin:true});
toast(`you are successfully logged-in as  ${response.data[0].nickname}`, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});
navigate('/dashboard')
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