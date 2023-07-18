import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ComContainer from "./ComContainer"
import LivesChat from "./LivesChat"





const WatchPage = ()=>{
const[serachParams] = useSearchParams()

 const dispatch = useDispatch()
 useEffect(()=>{
 dispatch(closeMenu())
    },[])
    

    return(
        <div className="flex-col ">
        <div className="ml-8 p-2 flex ">
            <div>
           {
          <iframe width="800" height="420"
           src={"https://www.youtube.com/embed/"+serachParams.get("v")}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen></iframe>  
            } 
            </div>
            <div >
                <LivesChat  /> 
            </div>
        </div>
            <ComContainer/>
        </div>

    )
}

export default WatchPage