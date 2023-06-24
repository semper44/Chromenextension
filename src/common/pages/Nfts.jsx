/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import * as S from './style/Styles'
// import Footer from './Footer'
import { GlobalStyling } from '../globalStyles/Global'
// import { MdCopyAll , MdRemoveRedEye , MdFileUpload ,MdDownload } from "react-icons/md";
import NavBar from '../layout/NavBar';
import { useNavigate } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet'
import AllNfts from './AllNfts';
import { motion } from "framer-motion"
import useLocalStorage from "use-local-storage";
import { Tooltip } from 'react-tooltip'
import { Buffer } from "buffer";
import { MdArrowBack, MdClose } from "react-icons/md";
import axios from 'axios';
import SingleNft from '../components/SingleNft';
import { ToastContainer, toast } from "react-toastify";

const availAbleNfts = [
  {}, {}, {}, {}, {}
]
const yourNfts = [
  {}, {}, {}
]


function Nfts() {
  const [show, setShow] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [showListInput, setShowListInput] = useState(false);
  const [link, setLink] = useState("nfts")
  const [loading, setLoading] = useState(true)
  const [nftIds, setNftsIds] = useState({ nftid: "" });
  const [items, setItems] = useState();
  const [data, setData] = useState("all")
  const [get_availableNfts, setGetAvailableNfts] = useState([]);
  const [saveUsersDetails, setSavedUsersDetails] = useLocalStorage(
    "usersDetails",
    { valueData: {}, isLoggedin: false }
  );

  // all nfts
  useEffect(() => {
    (async () => {
      const users_id = saveUsersDetails?.valueData.id;
      if (users_id == "") return toast("No details provided", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const usersIds = {
        usersid: users_id,
      };
      const get_UsersNft = await axios.post(
        `${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}getNft`,
        usersIds
      );
      let available_nft = [];
      for (let i = 0; i < get_UsersNft.data.data.length; i++) {
        const users_nft_info = await axios
          .get(
            `${import.meta.env.VITE_HEDERA_BASE_URL_TESTNET}api/v1/tokens/${get_UsersNft.data.data[i].nftid
            }/nfts`
          )
          .then((res) => res.data);

        if (users_nft_info?.nfts.length !== 0) {

          // for (let j = 0; j < users_nft_info.nfts.length; j++) {
          users_nft_info.nfts.forEach(async (items, index) => {
            if (
              items.account_id ==
              saveUsersDetails.valueData.accountID
            ) {
              console.log(items)
              console.log("available nft values", items)
              const metadata = Buffer.from(
                items.metadata,
                "base64"
              ).toLocaleString();
              const fulldata = metadata.split("//")[1];
              const response = await axios.get(
                `${import.meta.env.VITE_CLOUD_FLARE}${fulldata}`
              );

              const fulldata_img = response.data.image.split("//")[1];

              let data = {
                owner: items.account_id,
                token_ids: items.token_id,
                image: import.meta.env.VITE_CLOUD_FLARE + fulldata_img,
                name: response.data.name,
                description: response.data.description,
                creator: response.data.creator,
                type: response.data.type,
                edition: response.data.edition,
              };

              available_nft.push(data);
              setLoading(false)
            }
            setGetAvailableNfts([...available_nft]);
            // setSavedUsersDetails(false)
          })
        }
      }

    })();
  }, []);

  // all usersnfts
  const getAllUsersNFTs = async () => {
    const users_id = saveUsersDetails?.valueData.id;
    const saveNfts = {
      usersId: users_id,
      usersNftId: nftIds.nftid,
    };
    if (nftIds.nftid == "") return toast(
      'Input can not be empty',
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
    const split_NFT_id = nftIds.nftid.split(".");
    if (split_NFT_id[1] !== "0") return toast("wrong input", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const user_saveNft = await axios.post(
      `${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}saveNft`,
      saveNfts
    );
    console.log(user_saveNft.status)
    if (user_saveNft.status == 200) {
      toast("checking for availbility", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      window.location.reload();
    }
  };


  function showBottomSheet(items) {
    setShow(true);
    setItems(items)
  }

  function singleNft(e) {
    console.log(e.target);
    // setShow(true)
  }
  const navigate = useNavigate();
  return (
    <MainLayout display={true}>
      <NavBar title="NFTs" backArrow={<MdArrowBack size={18} />} />
        <GlobalStyling />
        {data?.length >= 1 &&
          <div className="w-full h-fit py-2 flex items-center justify-around">
            <div onClick={() => { setLink("nfts") }} className={`uppercase text-xs font-thin tracking-wider pt-7 cursor-pointer`}> <p className={`${link === "nfts" ? "font-extrabold text-[#16ffd8]" : "text-white"}`}>NFTs</p> </div>
            <div onClick={() => { setLink("yours") }} className={`uppercase text-xs font-thin tracking-wider pt-7  cursor-pointer`}><p className={`${link === "yours" ? "font-extrabold text-[#16ffd8]" : "text-white"}`}>Yours</p></div>
            <div onClick={() => { setLink("create") }} className={`uppercase text-xs font-thin tracking-wider pt-7  cursor-pointer`}> <p className={`${link === "create" ? "font-extrabold text-[#16ffd8]" : "text-white"}`}>Create</p></div>
          </div>
        }
        {/* THIS IS FOR ALL NFTS */}
        <S.ScrollBar className='w-full h-[450px] overflow-y-scroll p-1'>
        {link === "nfts" &&
          <motion.div onClick={() => setShow(true)} className="cursor-pointer" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "100%" }} exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 1 } }}>
            {availAbleNfts.length >= 1 ?
              <div className='w-full flex flex-col'>
                <div className='grid grid-cols-2 gap-[5px] self-center'>
                  {availAbleNfts.map((el, key) =>
                    <div key={key} onClick={() => setShow(!show)} className='w-[140px] rounded-[25px] bg-gradient-to-br from-[#15dfee00] to-[#f0028500]'>
                      <div className='h-fit w-full rounded-[25px] bg-[#121213] overflow-hidden'>
                        <div className='h-fit w-[90%] mt-[7px] relative flex items-center mx-auto justify-center'>
                          <img src="../nfmages/boredApe.png" className='object-cover h-full w-full rounded-[20px]' alt="" />
                          <div className='flex items-center justify-center absolute h-[30px] bottom-[-15px] w-[80px] bg-[#1b1b1b31] backdrop-blur-[10px] rounded-[9px]'>
                            <p className='flex text-white font-bold'>40.5 <p className='ml-[3px] text-[10px] text-[#25fdef]'> ETH</p></p>
                          </div>
                        </div>
                        <div className='h-16 flex flex-col items-center justify-center'>
                          <p className='text-white font-bold'>{"Ca Bored"}</p>
                          <div className='w-[70px] h-[5px] rounded-lg bg-[#2d2e2e]'></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              :
              <Nothing msg1={"No Nfts yet"} msg2={"Add NFT"} />}
          </motion.div>
        }


        {/* THIS IS FOR YOUR NFTS */}
        {link === "yours" &&
          <motion.div onClick={() => setShow(true)} className="cursor-pointer" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "100%" }} exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 1 } }}>
            {yourNfts.length >= 1 ?
              <div className='w-full flex flex-col'>
                <div className='grid grid-cols-2 gap-[5px] self-center'>
                  {yourNfts.map((el, key) =>
                    <div key={key} onClick={() => setShow(!show)} className='w-[140px] rounded-[25px] bg-gradient-to-br from-[#15dfee00] to-[#f0028500]'>
                      <div className='h-fit w-full rounded-[25px] bg-[#121213] overflow-hidden'>
                        <div className='h-fit w-[90%] mt-[7px] relative flex items-center mx-auto justify-center'>
                          <img src="../nfmages/boredApe.png" className='object-cover h-full w-full rounded-[20px]' alt="" />
                          <div className='flex items-center justify-center absolute h-[30px] bottom-[-15px] w-[80px] bg-[#1b1b1b31] backdrop-blur-[10px] rounded-[9px]'>
                            <p className='flex text-white font-bold'>40.5 <p className='ml-[3px] text-[10px] text-[#25fdef]'> ETH</p></p>
                          </div>
                        </div>
                        <div className='h-16 flex flex-col items-center justify-center'>
                          <p className='text-white font-bold'>{"Ca Bored"}</p>
                          <div className='w-[70px] h-[5px] rounded-lg bg-[#2d2e2e]'></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              :
              <Nothing msg1={"No Nfts yet"} msg2={"Add NFT"} />}
          </motion.div>
        }

        {link == 'create' &&
          <motion.div onClick={() => setShow(true)} className="cursor-pointer h-[90%]" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "100%" }} exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 1 } }}>
            <div className='w-full h-full flex items-center justify-center'>
              <div className='h-[90px] w-[230px] flex items-center justify-center font-bold text-[#17f5ba] border-4 border-[#222222] bg-[#161616] rounded-lg'>
                COMING SOON
              </div>
            </div>
          </motion.div>
        }
      </S.ScrollBar>


      {/* <BottomSheet skipInitialTransition open={show} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
        <SingleNft items={items} setShow={setShow} setShowInput={setShowInput} showInput={showInput} />
      </BottomSheet> */}

      <BottomSheet skipInitialTransition open={show} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
        <div className='bg-[#000000] rounded-2xl'>
          <div className='h-14 border-b border-b-slate-200 py-[1px] w-full flex items-center relative'>
            <div onClick={() => setShow(!show)} className='absolute left-[15px] translate-y-[-50%] top-[50%] w-[30px] h-[30px] flex justify-center items-center border cursor-pointer border-slate-300/50 rounded-full '>
              <MdClose size={20} className='text-white' />
            </div>
            <div className='flex-1 flex items-center justify-center text-center text-lg tracking-wider font-bold text-white'>INFO</div>
          </div>
          <S.ScrollBar className='w-full h-[500px] overflow-y-scroll p-1'>

            <div className='w-full flex item-center justify-center py-7'>
              <div className='flex flex-col items-center px-2'>

                <div id='NFT IMAGE' className='h-[200px] w-[200px] mx-auto mb-[20px] rounded-[25px] bg-gradient-to-br from-[#000000] to-[#000000]'>
                  <div className='h-full w-full relative flex items-center mx-auto justify-center'>
                    <img src="../nfmages/boredApe.png" className='object-cover h-full w-full rounded-[20px]' alt="" />
                    <div className='flex items-center justify-center absolute h-[30px] bottom-[-15px] w-fit px-5 bg-[#1b1b1b31] backdrop-blur-[10px] rounded-[9px]'>
                      <p className='flex text-white font-bold'>40.5 <p className='ml-[3px] text-[10px] text-[#01eea3]'> ETH</p></p>
                    </div>
                  </div>
                </div>
                <div id='MAIN CONTAINER' className='flex flex-col h-fit hover:bg-[#00ff9513] bg-[#161616] w-[95%] rounded-xl pt-3'>

                  <div className='w-full h-fit flex flex-col gap-2 items-center justify-center'>
                    <p className='flex px-3 font-bold text-xs text-[#ffffff] justify-between items-center w-full'>NAME :
                      <span className='ml-3 text-[#d4d4d4] font-thin'>
                        {'EYE\'S OF AGAMATO'}
                      </span>
                    </p>
                    <p className='flex px-3 font-bold text-xs text-[#ffffff] justify-between items-center w-full'>TOKEN ID :
                      <span className='ml-3 text-[#d4d4d4] font-thin'>
                        {'0.0.12039459'}
                      </span>
                    </p>
                    <p className='flex px-3 font-bold text-xs text-[#ffffff] justify-between items-center w-full'>CREATOR :
                      <span className='ml-3 text-[#d4d4d4] font-thin'>
                        {'SAGE'}
                      </span>
                    </p>
                    <p className='w-full bg-[#000000] h-7 rounded-b-[10px] flex items-center'>
                      <p className='flex px-3 text-xs font-bold text-[#ffffff] justify-between items-center w-full'>OWNER
                        <span className='ml-3 text-[#9c9c9c] font-thin truncate tracking-[0.5px]'>
                          {'0.0.1334545'}
                        </span>
                      </p>
                    </p>
                  </div>
                </div>

                <div id="DESCRIPTION" className='w-[95%] my-3 h-fit p-2 bg-[#171717] border-[1px] border-[#181717] text-white rounded-lg'>
                  <p className='text-[11px] font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores iste exercitationem.</p>
                </div>

                <div id='BUTTONS' className='h-fit w-[95%] flex-col gap-2 text-white'>
                  <div className='w-full flex flex-col gap-[4px] py-1'>
                    {showListInput && <input type="text" placeholder='Enter Amount' className='h-[45px] w-full border-[1px] text-white focus:outline-0 px-3 bg-transparent border-[#131313] rounded-lg' />}
                    {showListInput ?
                      <>
                        <button onClick={() => setShowListInput(!showListInput)} className='h-[45px] w-full font-extrabold bg-[#00ff95] text-black rounded-lg text-sm'>
                          PROCEED TO LIST
                        </button>
                        <button onClick={() => setShowListInput(!showListInput)} className='h-[45px] w-full font-extrabold bg-[#ff0000] text-white rounded-lg text-sm'>
                          CANCEL
                        </button>
                      </>
                      :
                      <>
                        <button onClick={() => setShowListInput(!showListInput)} className='h-[45px] w-full font-extrabold bg-[#00ff95] text-black rounded-lg text-sm'>
                          LIST
                        </button>
                      </>
                    }
                  </div>
                  <div className='w-full flex flex-col gap-[4px]'>
                    {!showListInput &&
                      <button onClick={() => navigate('/nftswap')} className='h-[45px] w-full font-extrabold bg-[#fcbe04] text-black rounded-lg flex items-center justify-center text-sm'>
                        TRANSFER
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </S.ScrollBar>
        </div>
      </BottomSheet>
    </MainLayout>
  )
}

export default Nfts

