/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import * as S from './style/Styles'
import NavBar from '../layout/NavBar';
import Nothing from './Nothing';
import { MdArrowBack, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { Navigate } from 'react-router-dom';


function NftSwap() {
    const [swapFrom, setSwapFrom] = useState('');
    const [swapTo, setSwapTo] = useState('400');
    return (
        <MainLayout>
            <NavBar title="Send NFT" to={"/NFTs"} backArrow={<MdArrowBack size={18} />} />
            <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
                <div className='h-fit w-full flex flex-col gap-2 items-center justify-center pt-4'>
                    <div className='w-full h-fit flex items-center justify-center'>
                        <div id='nft-holder' className='relative h-[170px] w-[170px] mb-8'>
                            <div className='flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-[-15px] h-[27px] w-[100px] rounded-xl bg-white text-center text-xs font-bold'>
                                {"0.0.234545"}
                            </div>
                            <img src="../nfmages/boredApe.png" className='h-full w-full object-cover rounded-[28px]' alt="" />
                        </div>
                    </div>

                    <div className='flex w-[90%]  h-fit justify-center text-white'>
                        <div className='flex flex-col w-full p-3 bg-[rgb(18,18,19)] rounded-2xl'>
                            <div className='w-full mx-auto flex '>
                                <div className='w-1/2 h-12'>
                                    <h4 className='font-bold'>{ "Turtle Moon #5" }</h4>
                                    <p className='text-xs'>{"Turtle mooon"}</p>
                                </div>
                                <div className='w-1/2 h-12 flex justify-end'>
                                    <div className='h-10 w-10 rounded-xl overflow-hidden translate-x-3 shadow-[0px_0px_0px_4px_rgb(18,18,19)]'>
                                        <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                    </div>
                                    <div className='h-10 w-10 rounded-xl overflow-hidden'>
                                        <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mx-auto flex'>
                                <div className='w-1/2 h-9 flex items-center'>Token ID</div>
                                <div className='w-1/2 h-9 flex items-center justify-end font-bold'>{ "0.0.2344545"}</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full justify-center  h-[45px]'>
                        <input type="number" value={swapFrom} placeholder='Enter Senders Account' className='h-full w-[200px] bg-[#161616] text-white rounded-l-[9px] focus:outline-none px-3 appearance-none' />
                        <div className='h-[70%] my-auto bg-[#00cb6c] w-[1px]'></div>
                        <select name="" id="" className='h-full text-sm w-[80px] rounded-r-[9px] bg-[#161616] text-white text-center appearance-none px-3 focus:outline-none'>
                            <option value="HEDERA">HEDERA</option> 
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-white relative w-[90%] py-2">
                        <div id='gap' className='absolute w-[40px] h-full top-0 left-[20px]'>
                            <div className='h-full w-[1px] bg-[#00cb6c]'></div>
                        </div>

                        <div className='flex items-center pl-[14px] text-[13px]'>
                            <div id='ball' className='h-[12px] w-[12px] rounded-full bg-[#00cb6c]'></div>
                            <span className='pl-2'>290</span>
                            <span className='pl-3 text-[10px]'>GAS FEES</span>
                        </div>

                        <div className='flex items-center pl-[14px] text-[13px]'>
                            <div id='ball' className='h-[12px] w-[12px] rounded-full bg-[#00cb6c]'></div>
                            <span className='pl-2'>1 USDT - 0.00193494 BTC</span>
                            <span className='pl-3 text-[10px]'>RATE</span>
                        </div>
                    </div>

                    <div className='flex w-full justify-center h-[45px]'>
                        <button onClick={() => Navigate('SENDING NFT OOOO')} className='h-[40px] w-[90%] font-bold transition-[.2s] hover:scale-[0.95] rounded-lg bg-[#05f479] text-black'>
                            TRANSFER NFT
                        </button>
                    </div>
                </div>

            </S.ScrollBar>
        </MainLayout>
    )
}

export default NftSwap