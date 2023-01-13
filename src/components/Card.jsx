import React from 'react'
import { Link } from "react-router-dom"

const Card = (props) => {

    // console.log(props.elemData)

    return (
        <>
            <div className="card">
                <div className="cardBody">
                    <div className="cardImg">
                        <img src={props.elemData.imageUrl} alt="" />
                    </div>
                    <div className="cardData">

                        <div className="cardTitle">
                            {props.elemData.title}
                        </div>
                        <div className="cardPrice">
                            &#8377;{props.elemData.price}
                        </div>
                        <div className='cardAddBtn'>
                        <Link>Add To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card