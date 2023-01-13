import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom"
import Context from '../context/Context'


const Navbar = () => {

    const context = useContext(Context);

    const clickHandler = (filter) =>{
        context.setCat(filter);
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
                        <li><Link to={"/"} onClick={()=>{clickHandler("")}}>All Products</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("electronics")}>Electronics</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("jewelery")}>Jewelery</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("men's clothing")}>men's clothing</Link></li>
                        <li><Link to={"#"} onClick={()=>clickHandler("women's clothing")}>women's clothing</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar