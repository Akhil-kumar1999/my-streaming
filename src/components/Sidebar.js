import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import store from "../utils/store"




const Sidebar  = ()=>{

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)


    if(!isMenuOpen) return null

    return(
        <div className="shadow-lg  m-3 px-4 w-40">
        <ul >
        <Link to={'/'}><li className="font-bold">Home</li></Link> 
        <li className="font-bold">Shorts</li>
        <li className="font-bold">Subscriptions</li>
        </ul>
         
         <ul className="pt-4">
          <Link to={'search'}><li>Library</li></Link>  
            <li>History</li>
            <li>Your videos</li>
            <li>Watch later</li>
            <li>Your clips</li>
            <li>Liked videos</li>
         </ul>
         <ul className="pt-4 font-bold">
            <li>subscriptions</li>
         </ul>

        <h1 className="pt-4 font-bold">Explore</h1>
        <ul className="pt-4">
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Filims</li>
            <li>Live</li>
            <li>Gaming</li>
            {/* <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fasion&Library</li> */}
        </ul>
        </div>
     

      
    )
}
export default Sidebar