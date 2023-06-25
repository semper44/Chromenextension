/* eslint-disable no-unused-vars */
import React,{useEffect, useReducer, useState} from 'react'
import MainLayout from '../layout/MainLayout'
import { GlobalStyling } from '../globalStyles/Global'
import * as S from "./style/Styles"
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "use-local-storage";
import preval from "babel-plugin-preval/macro";
import { ToastContainer, toast } from "react-toastify";




const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password1: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(.*[!@#$%^&*]){2}/, 'Password is not strong enough')
    .required('Required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    .required('Required'),
});


function Register() {
  const[doNavigate, setDoNavigate]= useState(false)
  const [saveUsersDetails, setSavedUsersDetails] = useLocalStorage(
    "usersDetails",
    { valueData: {}, isLoggedin: false }
  );
  const [value] = useLocalStorage("usersDetails", undefined)
  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password1: '',
      password2: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },

  });

  const fetchAccount = async () => {
    return await axios
      .get(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}createWallet`)
      .then((returnedData) => returnedData.data);
  };

  const {
    isLoading,
    isError,
    data: queryUsersAccount,
    error,
    refetch,
  } = useQuery({ queryKey: ["usersAccount"], queryFn: fetchAccount });

  console.log(queryUsersAccount);
   
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const secreteFiles = preval`
  //     const fs = require('fs')
  //     module.exports = fs.readFileSync(require.resolve('./secretes.txt'), 'utf8')
  //   `;

  //       if (
  //         secreteFiles !== "" &&
  //         saveUsersDetails.isLoggedin == true &&
  //         Object.keys(saveUsersDetails.valueData).length != 0
  //       ) {
  //         navigate("/home");
  //       }

  //       if (
  //         saveUsersDetails.isLoggedin == false &&
  //         secreteFiles != "" &&
  //         Object.keys(saveUsersDetails.valueData).length == 0
  //       ) {
  //         navigate("/login");
  //       }
  //       if (
  //         saveUsersDetails.isLoggedin == false &&
  //         secreteFiles == "" &&
  //         Object.keys(saveUsersDetails.valueData).length == 0
  //       ) {
  //         navigate("/");
  //       }
  //     } catch {}
  //   })();
  // }, []);
  console.log(formik);

  // function saveToLocalStorage(){
  //   let data = {
  //     password: formik.values.password2,
  //     walletAddress: queryUsersAccount.publicKeys,
  //     privateKey: queryUsersAccount.privateKeys,
  //     seedPhrase: queryUsersAccount.seedPhrases,
  //     // nickname: formik.values.nickname,
  //     email: formik.values.email,
  //     accountID: queryUsersAccount.accountID,
  //   };

  //   console.log(data);
  //   let store=JSON.parse(window.localStorage.getItem("usersDetails"))||null
  // }

   const navigateUsersPage = async () => {
      try {  
        // if (
        //   !formik.errors && formik.touched
        // ) {
          let data = {
            password: formik.values.password2,
            walletAddress: queryUsersAccount.publicKeys,
            privateKey: queryUsersAccount.privateKeys,
            seedPhrase: queryUsersAccount.seedPhrases,
            nickname: "emma",
            email: formik.values.email,
            accountID: queryUsersAccount.accountID,
          };
          console.log(data);
          setSavedUsersDetails({ valueData: data, isLoggedin: true })
          const response = await axios.post(
            `${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}register`,
            data
          );
          console.log(response);
          if (response.status === 200) {
            //  updateInput(updateStorage); //clean update redux
  
            const secreteFiles = preval`
        const fs = require('fs')
        module.exports = fs.writeFileSync(require.resolve('./secretes.txt'),'secrete saved');
        `;
            toast("🤝 Registration was Successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
  
            // const updateStorage = {
            //   email: register.email,
            //   password: register.password,
            //   nickname: register.nickname,
            //   usersAccount: register.usersAccount,
            //   usersPrivateKey: register.usersPrivateKey,
            //   usersSeedPhrase: queryUsersAccount.seedPhrases,
            //   accountID: queryUsersAccount.accountID,
            // };
            navigate("/seedphrase");
          } else {
            toast("🤝 Registration failed please try again later", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          } catch (err) {
            console.log(err);
            toast("🤝 Registration failed with errors", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
    };

  return (
    <MainLayout>
        <S.ScrollBar className='w-full h-full'>
          <GlobalStyling />
          <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
            <div className='h-full w-full text-center items-center'>
              <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold py-8 px-2 border-b border-slate-300/20 text-white">
                Register
              </div>

              <div className=' w-full flex flex-col justify-center items-center gap-7 pt-12'>
                <div className='w-full h-fit'>
                  {/* <div className='group top-2 left-12 text-gray-200 '>
                    Enter your Email              
                  </div> */}
                <input 
                 type="email"
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 className='w-[80%] pt-4 pb-4 outline-none capitalize bg-transparent text-white h-10 rounded-md pl-3 border border-slate-300/50 transition-transform transform group-focus:translate-y-[-20px] group-active:translate-y-[-20px] ' name="email"/>
                 </div>
                <div className={'w-full flex justify-center items-center'}>
                  <div className={`text-red-500 ${formik.touched.email && formik.errors.email ?"opacity-1":"opacity-0"} mt-[-22px]`}>{formik.errors.email}</div>
                </div>
                <div className='w-full h-fit'>
                  {/* <div className='absolute top-2 left-12 text-gray-200'>
                    Enter your Password              
                  </div>              */}
                <input type="password"
                  id="password1"
                  value={formik.values.password1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}  
                  className='w-[80%] pt-4 pb-4 outline-none bg-transparent text-white h-10 rounded-md pl-3 border border-slate-300/50' name="password1" />
                </div>
                <div className={'w-full flex justify-center items-center'}>
                  <div className={`w-[70%] text-red-500 mt-[-22px] w-full flex justify-center items-center ${formik.touched.password1 && formik.errors.password1?"opacity-1":"opacity-0"}`}>{formik.errors.password1}</div>
                </div>
                <div className='w-full h-fit'>
                  {/* <div className='top-2 left-12 text-gray-200'>
                    Confirm your Password              
                  </div>                 */}
                <input type="password"
                  id="password2"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}  
                  className='w-[80%] pt-4 pb-4 outline-none bg-transparent text-white h-10 rounded-md pl-3 border border-slate-300/50' name="password2" />
                </div>
                <div className={'w-full flex justify-center items-center'}>
                  <div className={`text-red-500 mt-[-24px] ${formik.touched.password2 && formik.errors.password2?"opacity-1":"opacity-0"}`}>{formik.errors.password2}</div>
                </div>
                <div onClick={navigateUsersPage} className={`w-[80%] h-fit py-1 px-3  text-center rounded-md space-x-4 text-md font-semibold tracking-wider text-white ${!formik.isValid || !formik.isSubmitting?"bg-gray-300":"bg-[#e11584]/90"} cursor-pointer`}>
                <button
                  type="submit"
                  className={"cursor-pointer"}
                  // disabled={!formik.isValid || formik.isSubmitting}
                >
                  Register
                </button>
                </div>
            </div>
           
            </div>
          </form>
            </S.ScrollBar>
    </MainLayout>

  )
}

export default Register



