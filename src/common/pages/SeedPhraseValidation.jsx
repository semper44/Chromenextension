/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { GlobalStyling } from '../globalStyles/Global'
import * as S from "./style/Styles"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "use-local-storage";



import CopyToClipboardButton from '../components/CopyToClipboardButton'

function SeedPhraseValidation() {
    const [matchingSeed, setMatchingSeed] = useState({ "input3": "", "input5": "", "input7": "" });
    const [value] = useLocalStorage("usersDetails", undefined)
    const {valueData}= value
    const navigate=useNavigate()

      console.log(valueData);
    const splitted_seedphrase = valueData.seedPhrase.split(" ")
    console.log(splitted_seedphrase)

    const clipboard= ""
    const num=[2, 4,6]

    function change(e){
      setMatchingSeed({...matchingSeed, [e.target.name]:e.target.value})
    }
    console.log(matchingSeed);

    function handleBlur(e){
      let name=e.target.name
      console.log(e.target.id);
      if(matchingSeed[e.target.id]===e.target.value){
        console.log("good");
        return toast("😰input matched", {
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
      else if(e.target.value ===""){
        console.log("bad");
        return toast("😰  input must not be empty", {
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
      else{
        console.log("vbad");
        return toast("😰  inputs do not match", {
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

    }

    // const navigateUsersPage = async () => {
    //   try {  
    //     // if (
    //     //   !formik.errors && formik.touched
    //     // ) {
    //       let data = {
    //         password: valueData.password,
    //         walletAddress: valueData.usersAccount,
    //         privateKey: valueData.usersPrivateKey,
    //         seedPhrase: valueData.seedPhrases,
    //         nickname: valueData.nickname,
    //         email: valueData.email,
    //         accountID: valueData.accountID,
    //       };
  
    //       console.log(data);
    //       const response = await axios.post(
    //         `${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}register`,
    //         data
    //       );
    //       console.log(response);
    //       if (response.status == 200) {
    //         //  updateInput(updateStorage); //clean update redux
  
    //         const secreteFiles = preval`
    //     const fs = require('fs')
    //     module.exports = fs.writeFileSync(require.resolve('./secretes.txt'),'secrete saved');
    //     `;
    //         toast("🤝 Registration was Successful", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "dark",
    //         });
  
    //         // const updateStorage = {
    //         //   email: register.email,
    //         //   password: register.password,
    //         //   nickname: register.nickname,
    //         //   usersAccount: register.usersAccount,
    //         //   usersPrivateKey: register.usersPrivateKey,
    //         //   usersSeedPhrase: queryUsersAccount.seedPhrases,
    //         //   accountID: queryUsersAccount.accountID,
    //         // };
    //         navigate("/home");
    //       } else {
    //         toast("🤝 Registration failed please try again later", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "dark",
    //         });
    //       }
    //       } catch (err) {
    //         console.log(err);
    //         toast("🤝 Registration failed with errors", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "dark",
    //         });
    //       }
    // };

    // const words = arr.split(' ');


  return (
    <MainLayout>
        <S.ScrollBar className='w-full h-full'>
          <GlobalStyling />
            <div className='h-full w-full text-center relative'>
              <div className=" h-fit w-full text-rgb(0, 123, 255) tracking-wide text-lg font-bold items-center py-8 px-2 border-b border-slate-300/20 text-white">
                Validation
              </div>
              <div className=" text-sm tracking-wide py-4 flex justify-start font-semibold text-gray-200">
                Please validate your account, complete the missing phrases. Click on the box to complete
                </div>
                <div className='w-full h-fit text-center'>
                    <div className='grid grid-cols-3 gap-4 pt-6'>
                      {splitted_seedphrase && splitted_seedphrase.map((word, index) =>( 
                        // {clipboard.concat("", word)}
                        <div className="border border-gray-500 text-white " key={index}>
                          {!num.includes(index)?word:<input className='outline-none bg-transparent text-white rounded-md pl-3 ' 
                          placeholder='enter'
                          name={`input${index+1}`}
                          onChange={change}
                          id={index}
                          onBlur={handleBlur}
                          />}
                        </div>
                      ))}
                    </div>
                </div>
                <div className='h-fit w-full absolute bottom-12 flex flex-col justify-center items-center gap-3 '>
                    <div onClick={()=>navigate("/accountname")} className="w-[80%] h-fit py-1 px-3 rounded-md space-x-4 text-md font-semibold tracking-wider text-white cursor-pointer border border-[#e11584]/90 hover:bg-[#e11584]/90">
                    Validate
                    </div>
                </div>
               
                {/* {copy&&<} */}
            </div>
            </S.ScrollBar>
    </MainLayout>

  )
}

export default SeedPhraseValidation

