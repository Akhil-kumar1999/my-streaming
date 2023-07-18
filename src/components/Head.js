import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SUGGETION_API } from "../utils/constants"
import { cacheResults } from "../utils/searchSlice"

const Head = ()=>{

  const [serchOuery,setSearchQuery]=useState("")
  const [suggetions, setSuggetions] = useState([])
  const [showSuggetions, setShowSuggetions] = useState(false)

  const searchCache = useSelector(store =>store.search)

  



    useEffect(()=>{
    const timmer = setTimeout(()=>{
         
      if(searchCache[serchOuery]){
        setSuggetions(searchCache[serchOuery])
      }
      else{
        getSuggetions() 
      } } ,200)

     return ()=>{
     clearTimeout(timmer)
     }
 
  },[serchOuery])

  const getSuggetions = async()=>{
  
    const data  =await fetch(YOUTUBE_SUGGETION_API+ serchOuery)
    const json =await data.json()
    setSuggetions(json[1])

    // update the serach cahche
    dispatch(cacheResults({
      [serchOuery] : json[1]
    }))

  } 

const dispatch = useDispatch()

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }

    return(
        <div className="grid grid-flow-col p-3 m-1 shadow-md">

         <div className="flex col-span-1 m-2 ">
          <img  onClick={()=>{toggleMenuHandler()}} className="h-4 m-1 cursor-pointer "
          alt="hambergicon" 
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
       
          <img className="h-5 ml-3"
          alt="youtube icon"
           src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"/>
         </div>
        
    
          <div className="col-span-10  px-32 m-1">
            <div>
            <input className="border border-gray-400 w-96 h-7 p-3 rounded-l-full"
             type="text" value={serchOuery} onChange={(e)=>setSearchQuery( e.target.value)}
             onFocus={()=>setShowSuggetions(true)}
             onBlur={()=>setShowSuggetions(false)}
             />
                
            <button className="border border-gray-400 px-3   p-2  rounded-r-full bg-gray-100">
              <img className="h-3 "
              alt="user icon"
              src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"/> 
              </button>
          </div>
          {
            showSuggetions &&(
              <div className="fixed bg-white w-96 py-1 px-5 shadow-lg rounded-lg border border-gray-100">
              <ul >
             {
              suggetions.map((suggetions)=>{
                return  <li className=" shadow-sm py-1 hover:bg-gray-100 " key={suggetions}>🔍 {suggetions}  </li>
              })
             }
              
                
              </ul>
            </div>
            )
          }
       
          </div>
          
          <div className="col-span-1 py-2">
            <img className="h-6"
             alt="user icon" 
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
          </div>

        </div>
    )
}
export default Head