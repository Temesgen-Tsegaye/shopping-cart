import { Outlet,Link } from "react-router"
import NavBar from "./NavBar"
import { useState } from "react"
 const Shared=()=>{
    const [addedItems,setAddedItems]=useState([])
    
    return(
    <div>
        <NavBar addeditems={addedItems} />
        <Outlet context={[addedItems,setAddedItems]}/>
    </div>
        
    
    )
}
export default Shared