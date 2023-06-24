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
import {motion} from "framer-motion"
import useLocalStorage from "use-local-storage";
import { Tooltip } from 'react-tooltip'
import { Buffer } from "buffer";
import { MdArrowBack, MdClose } from "react-icons/md";
import axios from 'axios';
import SingleNft from '../components/SingleNft';
import { ToastContainer, toast } from "react-toastify";




function Nfts() {
    const[show, setShow]=useState(false)
    const[showInput, setShowInput]=useState(false)
    const[link, setLink]=useState("nfts")
    const[loading, setLoading]=useState(true)
    const [nftIds, setNftsIds] = useState({ nftid: "" });
    const [items , setItems] = useState();
    const[data, setData]=useState("all")
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
              `${import.meta.env.VITE_HEDERA_BASE_URL_TESTNET}api/v1/tokens/${
                get_UsersNft.data.data[i].nftid
              }/nfts`
            )
            .then((res) => res.data);
           
            if (users_nft_info?.nfts.length !== 0) {
              
              // for (let j = 0; j < users_nft_info.nfts.length; j++) {
                users_nft_info.nfts.forEach(async(items,index)=>{
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
                  token_ids:items.token_id,
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
  if(user_saveNft.status == 200){
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

    
    function showBottomSheet(items){
      setShow(true); 
      setItems(items)
    }

    function singleNft(e){
      console.log(e.target);
      // setShow(true)
    }
    const navigate = useNavigate();
  return (
      <MainLayout display={true}>
          <NavBar title="NFTs" backArrow={<MdArrowBack size={18} />}  />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll pl-4'>
              <GlobalStyling />
              {data?.length>=1&&<div className="w-full h-fit py-2 flex item-center justify-between">
                <div onClick={()=>{setLink("nfts")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="nfts" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>NFTs</div>
                <div onClick={()=>{setLink("yours")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="yours" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>Yours</div>
                <div onClick={()=>{setLink("create")}} className={`uppercase text-xs font-semibold tracking-wider pt-7 ${link==="create" ?"underline text-[#e11584]/90":"text-white"} cursor-pointer`}>Create</div>
              </div>}

              {/* nfts*/}
              {link==="nfts" &&<motion.div onClick={singleNft} className="cursor-pointer" 
                initial={{opacity:0, width:0}}
                animate={{opacity:1, width:"100%"}}
                exit={{opacity:0,x:window.innerWidth, transition:{duration:1}}}
              >
                <AllNfts category={"nfts"} loading={loading}/>
              </motion.div>}
              
              {link==="yours" &&<motion.div onClick={showBottomSheet} className="cursor-pointer"
                initial={{opacity:0,  width:0}}
                animate={{opacity:1, width:"100%"}}
                exit={{opacity:0, x:window.innerWidth, transition:{duration:1}}} >
                <AllNfts category={"yours"} />
              </motion.div>}
            </S.ScrollBar>

                
              <BottomSheet skipInitialTransition open={show} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.7]} className='--rsbs-bg-transparent' >
                <SingleNft items={items} setShow={setShow} setShowInput={setShowInput} showInput={showInput} />
            </BottomSheet>
    </MainLayout>
  )
}

export default Nfts

