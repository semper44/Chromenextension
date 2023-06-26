/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
import * as Smain from '../../common/layout/style/Styles';
import { GlobalStyling } from '../globalStyles/Global'
import { MdCopyAll, MdRemoveRedEye, MdFileUpload, MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';
import Charts from '../components/Charts';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "use-local-storage";
import QRCode from 'react-qr-code';
import { MdClose, MdOutlineNavigation, MdAdd } from "react-icons/md";
import { LuStars } from 'react-icons/lu';
import { BottomSheet } from 'react-spring-bottom-sheet';
import Footer from '../layout/Footer';
import { ToastContainer, toast } from "react-toastify";

const allTokens = [
    { id: 1, name: "HEDERA", price: 0 },
    // { id: 2, name: "CANON", price: 298943 },
    // { id: 3, name: "PANDA", price: 483894 }
]

function Home() {
    const [show, setShow] = useState(false)
    const [showSendSheet, setShowSendSheet] = useState(false);
    const [qrCodeValue, setQrcodeValue] = useState('btc8dhdhe3nt9dfhtu49he98hfhiwehof');
    const [tokens, setTokens] = useState(allTokens)
    const [tokenTransfer, setTokenTransfer] = useState({
        tokenTo: "",
        tokenFrom: "",
        amount: 0,
    });
    const [saveUsersDetails, setSavedUsersDetails] = useLocalStorage(
        "usersDetails",
        { valueData: {}, isLoggedin: false }
    );

    function showFn() {
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
    const insertCommas = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <Smain.MainContainer className='container w-[330px] h-[640px] relative rounded-lg'>
            <div className='w-full h-full backdrop-blur-2xl bg-black/80'>
                <div className='h-[280px] w-full bg-[#121213] rounded-b-[45px]'>
                    <div id='CUSTOM_NAVBAR' className='h-[60px] w-full flex justify-between gap-1'>
                        <div className='h-full w-fit bg-[#72727200] px-4 flex items-center'>
                            <div className='h-[39px] w-fit border-[3px] border-[#1d2935] rounded-[30px] flex items-center px-[5px] pr-2'>
                                <img src='../hederaImage.png' className='h-[30px] w-[30px] object-contain' />
                                <h2 className='font-bold text-[#bdbcbc]'>HEDERA</h2>
                            </div>
                        </div>
                        <div className='h-full w-fit flex items-center px-3'>
                            <div className='h-[40px] w-[40px] flex items-center justify-center rounded-full border-[3px] border-[#1d2935]'>
                                <LuStars size={20} color='gray' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] h-[1px] mx-auto bg-[#767676]"></div>
                    <div id='DESC' className='h-fit w-full py-3 text-center'>
                        <p className='font-thin text-[#737373]  text-[12px]'>Available Wallet Balance</p>
                        <h1 className='flex text-[#717171] font-bold text-[30px] w-full justify-center items-baseline'>$ <p className='text-[#fff] text-[25px] px-1'> {insertCommas(0)}.00 </p></h1>
                    </div>
                    <div id='NETWORK' className='w-full h-fit flex items-center justify-center'>
                        <div className='h-[40px] w-fit p-[6px] flex items-center bg-[#1d1d1d] border-[2px] border-[#333333] rounded-[20px]'>
                            <div className="h-[30px] w-[30px] rounded-full bg-[#2e2e2e]"></div>
                            <p className='text-[#fff] ml-2'>Smart Chain BEP - 20</p>
                        </div>
                    </div>
                    <div id='BUTTONS' className='h-fit py-3 flex items-center justify-center gap-4'>
                        <button onClick={() => setShowSendSheet(!showSendSheet)} className="flex gap-2 items-center justify-center font-bold text-[#fff] h-[45px] w-[120px] bg-[#212121] rounded-[10px]">
                            <MdOutlineNavigation size={20} className='rotate-180' />
                            DEPOSIT
                        </button>
                        <button onClick={() => navigate('/send')} className="flex gap-2 items-center justify-center h-[45px] w-[120px] rounded-[10px] bg-gradient-to-r from-[#4ade80] to-[#3b82f6] font-bold text-white">
                            <MdOutlineNavigation size={20} className='text-white' />
                            SEND
                        </button>
                    </div>
                </div>
                <div id='TOKENS' className='w-full py-2 px-4 flex items-center justify-between'>
                    <p className='text-whtie font-bold text-[#fff]'>TOKENS</p>
                    <div className='h-fit w-fit p-1 px-4 gap-2 transition-[.4s] flex items-center text-white hover:cursor-pointer hover:bg-[#191b1a] hover:scale-[0.95] border-[#545454] border-[2px] rounded-[10px]'>
                        <MdAdd size={20} />
                        <p className='text-[10px] text-[#cccccc]'>IMPORT</p>
                    </div>
                </div>
                <S.ScrollBar className='w-full h-[230px] px-3 overflow-y-scroll'>
                    <div className='w-full h-fit flex flex-col gap-2'>

                        {tokens.map((token) =>
                            <div className='h-[100px] w-full flex items-center p-[7px] border-[2px] border-[#2a2a2a] rounded-[20px] bg-[#121212] first-letter:first-line:marker:'>
                                <div className='h-[85px] w-[47px] flex items-center justify-center bg-[#232323] rounded-[15px]'>
                                    <img src='../hederaImage.png' className='h-[30px] w-[30px] object-contain' />
                                </div>
                                <div className='flex flex-col flex-1 h-full'>
                                    <div className="flex items-center justify-between px-3 text-white">
                                        <h1 className='font-bold'>{token.name}</h1>
                                        <p className='text-[#b3b3b3] flex items-baseline font-bold'>$ <p className='text-[12px] font-bold ml-1 text-[#fff]'>{insertCommas(token.price)}</p> </p>
                                    </div>
                                    <div className='flex flex-1 items-center justify-center'>
                                        <div className='h-[90%] w-[94%] flex items-center justify-between px-1 bg-[#26262500] rounded-lg'>
                                            <div className='h-full flex-1 flex items-center justify-center text-white font-bold'>
                                                {/* ${insertCommas(0.3)} */}
                                            </div>
                                            <Charts height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div onClick={() => console.log('MANAGE TOKENS')} className='h-10 w-full flex items-center justify-center rounded-[20px] cursor-pointer text-white transition-[.4s] text-sm font-bold hover:scale-[0.90] bg-[#04af7c]'>
                            <p>MANAGE TOKENS</p>
                        </div>
                    </div>
                </S.ScrollBar>
                <BottomSheet skipInitialTransition open={showSendSheet} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
                    <div className='bg-[#000000] rounded-2xl'>
                        <div className='h-14 border-b border-b-slate-200 py-[1px] w-full flex items-center relative'>
                            <div onClick={() => setShowSendSheet(!showSendSheet)} className='absolute left-[15px] translate-y-[-50%] top-[50%] w-[30px] h-[30px] flex justify-center items-center border cursor-pointer border-slate-300/50 rounded-full '>
                                <MdClose size={20} className='text-white' />
                            </div>
                            <div className='flex-1 flex items-center justify-center text-center text-lg tracking-wider font-bold text-white'>VOTE</div>
                        </div>

                        <div className='h-fit w-full py-8 flex justify-center'>
                            <QRCode value={qrCodeValue} className='h-[180px] w-[190px]' />
                        </div>

                        <div className='h-fit w-full pb-8 flex items-center justify-center'>
                            <div className='p-2 px-4 rounded-[50px] bg-[#fff]'>
                                <p>{qrCodeValue}</p>
                            </div>
                        </div>

                        <div className='h-fit w-full pb-8 flex items-center justify-center'>
                            <div className="h-fit w-[90%] border-[#ff9900] bg-[#ff990034] text-white border-[2px] p-2 rounded-xl">
                                Please scan the your QR-code above to copy your wallet address an proceed to deposit,
                                additionaly you may also do other thing with
                            </div>
                        </div>
                    </div>
                </BottomSheet>
                <Footer />
            </div>
        </Smain.MainContainer>
    )
}

export default Home