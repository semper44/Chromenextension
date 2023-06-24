import React , {useEffect , useState} from 'react'
import MainLayout from '../layout/MainLayout'
import axios from 'axios'

function ListingNft() {
  const [allListing , setAllListing] = useState([]);
  useEffect(()=>{
   (async()=>{     
 const response =  await axios.get(`${import.meta.env.VITE_REACT_APP_MAIN_ENDPOINT}getallListings`)
setAllListing(response.data.results);
console.log(response.data.results)
   })()
  },[])
    
const swapping = async ()=>{
  console.log("swapped");
}

  return (
    <MainLayout >
         <div className="w-full flex justify-center items-center  my-2">
          {allListing.map((items,index)=>{
             return(
              <div className=" w-11/12 h-fit flex justify-center items-center">
                <div className="w-fit h-fit relative flex justify-center items-center">
                  <img src={items?.nftImage}  className="h-[350px] w-11/12"/>
                  <div className="bottom-0 mx-auto   flex flex-col justify-center items-center absolute w-full min-h-[100px]">
                    <div className="flex flex-col justify-center items-center backdrope-white-20 bg-white/60 min-h-[70px] rounded-md w-10/12">
                        <div className="w-fit">Owner : <span className="text-md font-semibold">{items.usersId}</span></div>
                        <div className="w-fit">Asking Price : <span className="text-md font-semibold">{items.requestAmount}HBar</span></div>
                      <button type="button" className="w-11/12 outline-none border
                       border-orange-300 bg-orange-400 text-md text-white font-bold my-1
                       rounded-lg
                      "
                      onClick={()=>swapping()}
                      >swap</button>
                   </div>   
                  </div>
                  </div>

                </div>
             )

          })

          }

         </div>
    </MainLayout>
  )
}

export default ListingNft