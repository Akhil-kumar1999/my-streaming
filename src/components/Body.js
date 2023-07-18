import Sidebar from "./Sidebar"
import MianContainer from "./MainContainer"
import { Outlet } from "react-router-dom"
const Body = ()=>{
    return(
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )

}

export default Body