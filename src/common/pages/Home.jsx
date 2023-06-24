/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import { GlobalStyling } from '../globalStyles/Global'
import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';
import Charts from '../components/Charts';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";



function Home() {
    const[show, setShow]=useState(false)
    const [tokenTransfer, setTokenTransfer] = useState({
        tokenTo: "",
        tokenFrom: "",
        amount: 0,
      });
    const [saveUsersDetails, setSavedUsersDetails] = useLocalStorage(
        "usersDetails",
        { valueData: {}, isLoggedin: false }
      );

    function showFn(){
        setShow(!show)
    }
    const fetchAccount = async () => {
        const data = { usersAccount: saveUsersDetails.valueData.accountID };
        return await axios
          .post(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}userDetails`, data)
          .then((returnedData) => returnedData.data);
      };
    
      const {
        isLoading,
        isError,
        data: queryUsersAccount,
        error,
        refetch,
      } = useQuery({ queryKey: ["userAccounts"], queryFn: fetchAccount });
      console.log(queryUsersAccount);
      console.log(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}userDetails`);
      console.log(error);


    const usersData = queryUsersAccount?.userAccountInfo;
    const usersID = saveUsersDetails.valueData.accountID;
      const makeTransfer = async () => {
        setTokenTransfer((previousData) => ({
          ...previousData,
          tokenFrom: usersID,
        }));
        if (
          tokenTransfer.tokenTo == "" ||
          tokenTransfer.tokenFrom == "" ||
          tokenTransfer.amount == ""
        ) {
          toast("input can  not be Empty", {
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
    
        const transferData = {
          senderAddress: tokenTransfer.tokenFrom,
          receiverAddress: tokenTransfer.tokenTo,
          amount: tokenTransfer.amount,
        };
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}transfer`,
          transferData
        );
        if (response.status == 200) {
          toast(
            `🤝 transfer of ${tokenTransfer.amount} to ${tokenTransfer.tokenTo} `,
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
      };

    const navigate = useNavigate();
  return (
      <MainLayout>
          <NavBar />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
              <GlobalStyling />
              <div className='w-full bg-[#3a3636e1] pb-5 rounded-b-xl '>
                <div className=' w-full  mt-2 rounded-lg relative  '>
                    <div className='w-full h-fit space-y-6 '>
                        <div className="tracking-wider text-center text-4xl font-bold text-white pt-5">$0.00</div>
                        <div className="w-full flex justify-center items-center space-x-3">
                            <div className="border border-slate-200 w-fit flex flex-row px-2 py-2 rounded-full space-x-2"><span className="font-semibold text-sm text-white">{!show?"0x273...37463":"**************"}</span><span className=""><MdCopyAll size={18} color='#ffffff' /></span></div>
                            <div className="h-9 w-9 border border-slate-100 rounded-full flex justify-center items-center">{show?<MdRemoveRedEye size={18} color='#ffffff' className='cursor-pointer' onClick={showFn} />:<MdCopyAll size={18} color='#ffffff' className='cursor-pointer' onClick={showFn} />}</div>
                        </div>
                        <div className="flex justify-center items-center space-x-3">
                            <div className="cursor-pointer w-6/12 h-10 bg-[#e11584]/90 flex justify-center items-center py-1 px-3 rounded-md space-x-4">
                                <div className="h-fit w-fit"><MdDownload size={20} className='text-white' /></div>
                                <div className="w-fit h-fit text-md font-semibold tracking-wider text-white ">Deposit</div>
                            </div>
                            <div onClick={()=>navigate("/send")} className="cursor-pointer h-10 w-6/12 bg-[#e11584]/90 flex justify-center items-center py-1 px-3 rounded-md space-x-4">
                                        <div className="h-fit w-fit"><MdFileUpload  size={20}  className='text-white' /></div>
                                <div className="w-fit h-fit text-md font-semibold tracking-wider text-white">Send</div>
                                </div>
                        </div>

                    </div>

                </div>
              </div>
              {/* distribution panel */}
              
              <div className='h-fit w-full  pop-up bg-red-100 flex justify-start items-center gap-2 rounded-lg my-4'>
                  {/* <div className="w-full uppercase px-2 font-semibold flex justify-start items-center py-1 pt-2 text-white">available Tokens ({<div className='text-blue-600/70 font-bold ' >{1}</div>})</div> */}
                   {/* items display section */}
                   <div className='h-fit w-fit'><img src="../hederaImage.png" className='h-10 w-10 rounded-full' /></div>
                    <div className="w-fit h-fit flex justify-between items-center">
                        <div className="flex flex-row justify-center items-center space-x-2">
                        <div className="w-fit h-fit text-sm tracking-wide font-semibold text-white">Hedera Token</div>    

                        </div>
                        <div className="flex justify-center items-center space-x-2">
                            <span className="w-fit h-fit text-sm tracking-wide font-semibold text-white">0.00</span>
                        </div>
                        
                    </div>
                    <div className='h-fit w-fit'><Charts/></div>

              </div>     
        </S.ScrollBar>
    </MainLayout>
  )
}

export default Home