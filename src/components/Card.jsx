import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import Context from "../context/Context"

const Card = (props) => {

    // console.log(props.elemData)
    const context = useContext(Context);

    const clickHandler = (e) => {
        // console.log("added", e)

        context.updateCartItems(e);
        // e.style.color = "red";

    }

    const removeHandler = (title) => {
        context.removeItemFromCart(title);
        // window.alert("removed")
    }

    const showMoreHandler = (elem) =>{
        console.log("single")
        context.updateSingleProduct(elem);
        // window.location = "/singleproduct"
    }

    // console.log("cart ckeck = ", props.cartCheck);

    if(props.cartCheck){
        return(
            <>
            <div className="card">
                <div className="cardBody">
                    <div className="cardImg">
                        <img src={props.elemData.image} alt="" />
                    </div>
                    <div className="cardData">

                        <div className="cardTitle">
                            {props.elemData.title}
                        </div>
                        <div className="cardPrice">
                            &#8377;{props.elemData.price}
                        </div>
                        {/* <div className='cardAddBtn'>
                            <Link onClick={() => clickHandler(props.elemData)}>Add To Cart</Link>
                        </div> */}

                        <div className='cardRemoveBtn'>
                            <Link onClick={() => removeHandler(props.elemData.title)}>Remove From Cart</Link>
                        </div>

                    </div>
                </div>
            </div>
            </>
        )
    }

   else{

        return(
            <>
            <div className="card">
                <div className="cardBody">
                    <div className="cardImg">
                        <img src={props.elemData.image} alt="" />
                    </div>
                    <div className="cardData">

                        <div className="cardTitle">
                            {props.elemData.title}
                        </div>
                        <div className="cardPrice">
                            &#8377;{props.elemData.price}
                        </div>
                        <div className='cardAddBtn'>
                            <Link onClick={() => clickHandler(props.elemData)}>Add To Cart</Link>
                        </div>

                        <div className='showMoreBtn'>
                            <Link onClick={()=>showMoreHandler(props.elemData)} to={"/singleproduct"}>Show More</Link>
                        </div>

                    </div>
                </div>
            </div>
            </>
        )
   }

    // return (

        


    //     <>

    //         <div className="card">
    //             <div className="cardBody">
    //                 <div className="cardImg">
    //                     <img src={props.elemData.image} alt="" />
    //                 </div>
    //                 <div className="cardData">

    //                     <div className="cardTitle">
    //                         {props.elemData.title}
    //                     </div>
    //                     <div className="cardPrice">
    //                         &#8377;{props.elemData.price}
    //                     </div>
    //                     <div className='cardAddBtn'>
    //                         <Link onClick={() => clickHandler(props.elemData)}>Add To Cart</Link>
    //                     </div>

    //                     <div className='cardRemoveBtn'>
    //                         <Link onClick={() => removeHandler(props.elemData.title)}>Remove From Cart</Link>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}

export default Card