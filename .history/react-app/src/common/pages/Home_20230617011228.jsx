/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Global } from "../../module/globalStyles/GlobalStyles";
import MainLayout from "../layout/MainLayout";
import RegisterStages from "../../module/stages/RegisterStages";
import InputsWithValidation from "../../module/inputs/InputsWithValidation";
import BigButton from "../../module/button/BigButton";
import { ToastContainer, toast } from "react-toastify";
import { FiArrowLeft, FiEyeOff } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "../../module/redux/slice/RegistrationSlice";
import { updateStages } from "../../module/redux/slice/StagesSlice";
import SmallInput from "../../module/inputs/SmallInput";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import {SyncLoader} from 'react-spinners'
import preval from 'babel-plugin-preval/macro';
import { useHashData} from "../../module/hook/useHooks";
import useLocalStorage from "use-local-storage";




function Home() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSeedPhrase, setShowSeedPhrase] = useState(true);
  const [firstStage, setFirstStage] = useState(true);
  const [secondStage, setSecondStage] = useState(false);
  const [thirdStage, setThirdStage] = useState(false);
  const [fourthStage, setFourthStage] = useState(false);
  const [matchingSeed, setMatchingSeed] = useState({ 3: "", 5: "", 7: "" });
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    nickname: "",
    password: "",
    usersAccount: "",
    usersPrivateKey: "",
    usersSeedPhrase: "",
  });

  const registration = useSelector((state) => state.registration);
  const dispatch = useDispatch();
  const fetchAccount = async () => {
    return await axios.get(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}createWallet`).then((returnedData) => returnedData.data);
  }

  const { isLoading, isError, data: queryUsersAccount, error, refetch } = useQuery({ queryKey: ['usersAccount'], queryFn: fetchAccount })
  useEffect(() => {
    (async()=>{

      try {
        const secreteFiles =  preval`
      const fs = require('fs')
      module.exports = fs.readFileSync(require.resolve('./secretes.txt'), 'utf8')
    `;

    console.log("secretes.txt content" , "")
        if (secreteFiles !== "") {
          navigate('/login')
        }
      } catch {}

    })()

},[])

  const submitAndNavigate = async () => {
    // toast("😰  Wrong Input", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
    // } else {
    if (!isError && !isLoading) {
      if (register.email == '' || register.password == '' || confirmPassword == '' || (register.password !== confirmPassword)) {
        return toast("😰  Wrong Input", {
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
      setRegister((previousData) => ({ ...previousData, usersAccount: queryUsersAccount.publicKeys, usersPrivateKey: queryUsersAccount.privateKeys, usersSeedPhrase: queryUsersAccount.seedPhrases }))
      toast("🤝  Move to the next stage", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // }
      setFirstStage(false);
      setSecondStage(true);
      setThirdStage(false);
      setFourthStage(false)
    }
  };

  const getSeedValue = (e) => {
    if (e.target.name == 3) {
     setMatchingSeed((previousSeed)=>({...previousSeed , 3:e.target.value}))
    } else if (e.target.name == 5) {
     setMatchingSeed((previousSeed)=>({...previousSeed , 5:e.target.value})) 
    } else {
      setMatchingSeed((previousSeed)=>({...previousSeed , 7:e.target.value}))
   }
  };

  const navigateThree = () => {
    setFirstStage(false);
    setSecondStage(false);
    setThirdStage(true);
    setFourthStage(false);
  };

  const navigateFouth = () => {
     if(matchingSeed[3] == "" && matchingSeed[5] == "" && matchingSeed[7] == "") return toast("😰  input must not be empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    if(seedPhrase[2] == matchingSeed[3] && seedPhrase[4] == matchingSeed[5] && seedPhrase[6] == matchingSeed[7]){
      toast("🤝 seedPhrase is correct", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }); 
      
      setFirstStage(false);
      setSecondStage(false);
      setThirdStage(false);
      setFourthStage(true);
    }else{
      toast("input does not match with seedPhrase", {
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
 
  const secreteData = register?.usersAccount; 
  const HASH = useHashData(secreteData);
  
  const registerUsers = async () => {
    return await axios.get(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}register` ,{} ,).then((returnedData) => returnedData.data);
  }
  const { isLoading:loadings, isError:errorss, data: queryregistrations, refetch:registerRefreshs } = useQuery({ queryKey: ['usersAccount'], queryFn: registerUsers })
console.log(queryregistrations)
  const navigateUsersPage = async () => {
    try {
      // { password, walletAddress, privateKey, seedPhrase , nickname , email}

      if(register.email !== "" && register.password !== "" && register.nickname !== "" && register.usersAccount !== "" && register.usersPrivateKey !== "" && register.usersSeedPhrase !== ""){

           let data = {
             password:register.password,
             walletAddress:register.usersAccount,
             privateKey:register.usersPrivateKey,
             seedPhrase:queryUsersAccount.seedPhrases,
             nickname:register.nickname,
             email:register.email,
             accountID:queryUsersAccount.accountID
           }
console.log(register);
const response = await axios.post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}register`,data);
if(response.status == 200){
      const secreteFiles =  preval`
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

     const updateStorage = {  email: register.email,,
        password: register.password,
        nickname: register.nickname,
        usersAccount:register.usersAccount,
        usersPrivateKey: register.usersPrivateKey,
        usersSeedPhrase: queryUsersAccount.seedPhrases,
        accountID:queryUsersAccount.accountID

     
        navigate('/dashboard');


    }else{
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

      }
  
    } catch(err) {
       console.log(err)
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
  const seedPhrase = register.usersSeedPhrase.split(" ");
  const backPagePassword = () => {
      setFirstStage(true);
      setSecondStage(false);
      setThirdStage(false);
      setFourthStage(false)

  }
    const backPageSecrete = () => {
      setFirstStage(false);
      setSecondStage(true);
      setThirdStage(false);
      setFourthStage(false)

 }

  const backPageValidateSecrete = () => {
       setFirstStage(false);
      setSecondStage(false);
      setThirdStage(true);
      setFourthStage(false)
  }

  return (
    <MainLayout className="w-full">
      <Global />
      <div className="w-full">
        <div className="">
          <div className="w-full flex justify-center items-center text-sm font-bold capitalize my-4 ">
            Signup
          </div>
          {/* <RegisterStages /> */}
          {firstStage && (
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
          )}

          {secondStage && (
            <form className="w-full my-6 flex justify-center items-center  flex-col">
              <div className="w-full flex items-start justify-start ">
                <FiArrowLeft color="orange" size={20}  onClick={()=>backPagePassword()} />
              </div>
              <div className="relative container w-11/12  lg:w-9/12 min-h-[100px] border border-dotted border-orange-400 my-4 flex flex-wrap justify-center items-center">
                {seedPhrase.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="container flex justify-center items-center w-fit h-fit bg-black/10 mx-1 p-1 m-1 rounded-md cursor-pointer"
                    >
                      <div className="flex text-{8px] font-black/70 ">
                        <span className="text-[10px] font-black/60">
                          {index + 1}
                        </span>{" "}
                        <span className="text-[10px] font-black/60">
                          👌 {item}
                        </span>{" "}
                      </div>
                    </div>
                  );
                })}

                {showSeedPhrase && (
                  <div
                    onClick={() => setShowSeedPhrase(false)}
                    className="absolute w-full h-full bg-white z-10 left-0 top-0 flex justify-center items-center cursor-pointer"
                  >
                    <div className="">
                      <FiEyeOff size={30} className="text-black/25" />
                    </div>
                  </div>
                )}
              </div>
              <BigButton
                buttonLabel={"next"}
                buttonClick={() => navigateThree()}
              />
            </form>
          )}

          {thirdStage && (
            <form className="w-full my-6 flex justify-center items-center  flex-col">
              <div className="w-full flex items-start justify-start ">
                <FiArrowLeft color="orange" size={20} onClick={()=>backPageSecrete()} />
              </div>
              <div className="relative container w-11/12  lg:w-9/12 min-h-[100px] border border-dotted border-orange-400 my-4 flex flex-wrap justify-center items-center">
                {seedPhrase.map((item, index) => {
                  if (index + 1 === 3) {
                    return (
                      <div
                        key={index + 1}
                        className="flex flex-row justify-center items-center space-x-1"
                      >
                        <span className="w-fit h-fit text-[8px]">
                          {index + 1}
                        </span>
                        <SmallInput
                           name={index + 1}
                          changeInput={(e) => getSeedValue(e)}
                        />
                      </div>
                    );
                  }else if ( index + 1 == 7) {
                    return (
                      <div
                        key={index + 1}
                        className="flex flex-row justify-center items-center space-x-1"
                      >
                        <span className="w-fit h-fit text-[8px]">
                          {index + 1}
                        </span>
                        <SmallInput
                           name={index + 1}
                          changeInput={(e) => getSeedValue(e)}
                        />
                      </div>
                    );
                  }else if (index + 1 == 5) {
                    return (
                      <div
                        key={index + 1}
                        className="flex flex-row justify-center items-center space-x-1"
                      >
                        <span className="w-fit h-fit text-[8px]">
                          {index + 1}
                        </span>
                        <SmallInput
                          name={index + 1}
                          changeInput={(e) => getSeedValue(e)}
                        />
                      </div>
                    );
                  }
                  else {
                    return (
                      <SmallInput
                        key={index + 1}
                        label={index + 1}
                        readOnly={true}
                        seedValue={item}
                        changeInput={(e) => getSeedValue(e)}
                      />
                    );
                  }
                })}
              </div>
              <BigButton
                buttonLabel={"next"}
                buttonClick={() => navigateFouth()}
              />
            </form>
          )}

  {fourthStage && (
            <form className="w-full my-6 flex justify-center items-center  flex-col">
              <div className="w-full flex items-start justify-start ">
                <FiArrowLeft color="orange" size={20} onClick={()=>backPageValidateSecrete()}/>
              </div>
              <div className="w-full">
                     <InputsWithValidation
                inputName={"Enter Nickname"}
                setInputValue={(e) =>
                  setRegister((previousData) => ({
                    ...previousData,
                    nickname: e.target.value,
                  }))
                }
              />
                 </div>
              <BigButton
                buttonLabel={"next"}
                buttonClick={() => navigateUsersPage()}
              />
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
