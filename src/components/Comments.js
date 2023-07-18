

const Comments =({data})=>{
const {name,comment,replies} = data


    return(
        <div className="m-2 p-3 flex shadow-sm rounded-lg my-2">
           <img className="h-6 m-1" alt="user img"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
            <div>
            <p className="px-2 text-base " >{name}</p>
            <p className=" px-2 text-xs font-normal">{comment}</p>
            
            </div>
        </div>
    )
}

export default Comments