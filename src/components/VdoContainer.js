import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VdoContainer = ()=>{
  
    const [video,setVideo] = useState([])

    useEffect(()=>{
    getVideos()
    },[])

    const getVideos =async ()=>{
        const data =await fetch(YOUTUBE_VIDEO_API)
        const json =await data.json()
        setVideo(json.items);
       
    }

    return(
<div className="flex flex-wrap">
{
    video.map((video)=>{
        return <Link key={video.id} to={'/watch?v='+ video.id} > <VideoCard  info={video} /> </Link>
    })
}
</div>
    )
}

export default VdoContainer