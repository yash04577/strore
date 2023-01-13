import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom"
import Context from '../context/Context'


const Navbar = () => {

    const context = useContext(Context);

    const clickHandler = (filter) =>{
        context.setCat(filter);
    }

    const cartHandler = (e) =>{
        // window.alert("cart not avilabel")
        // console.log("cart ", e);
        // context.updateCartItems(e);
    }

    return (
        <>
            <nav>
                <div className="navLeftDiv">
                    <div className="logoDiv" style={{color:"white", paddingLeft:"2rem"}}>
                        Yash's Store
                    </div>
                </div>
                <div className="navRightDiv">
                    <ul>
                        <li><Link to={"/"} onClick={()=>{clickHandler("")}}>Home</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("electronics")}>Electronics</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("jewelery")}>Jewelery</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("men's clothing")}>men's clothing</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("women's clothing")}>women's clothing</Link></li>
                        <li><Link to={"/cart"} onClick={()=>cartHandler(this)}>Cart</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar