

const VideoCard = ({info})=>{
    const {snippet,statistics} = info   
    const {channelTitle,title,thumbnails}=snippet

    return(
        <div className="shadow-sm w-60 m-2 p-2">
        <img alt="video" className=" rounded-xl w-64 " src={thumbnails.medium.url}/>    
        <ul >
            <li className="font-semibold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li> 
         </ul>
        </div>
    )
}

export default VideoCard