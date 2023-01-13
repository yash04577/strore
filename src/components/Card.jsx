import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import Context from "../context/Context"

const Card = (props) => {

    // console.log(props.elemData)
    const context = useContext(Context);

    const clickHandler = (e) => {
        // console.log("added", e)
        context.updateCartItems(e);

    }

    const removeHandler = (title) =>{
        context.removeItemFromCart(title);
        // window.alert("removed")
    }

    return (

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
                        <div className='cardRemoveBtn'>
                            <Link onClick={() => removeHandler(props.elemData.title)}>Remove From Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card