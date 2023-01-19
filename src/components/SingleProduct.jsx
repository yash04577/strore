import React, { useContext, useState } from 'react'
import Context from '../context/Context';
import Card from './Card';
import { Link } from 'react-router-dom';


const SingleProduct = (props) => {

    const context = useContext(Context);
    const data = context.getSingleProduct();
    console.log("data = ", data)

    const clickHandler = (e) => {
        context.updateCartItems(e);

    }


    return (
        <>
          

            {/* <div className="singlePageContainer">
                <div className="singleImg">
                    <img src={data.image} alt="" />
                </div>

                <div className="singleTitle">
                    {data.title}
                </div>
                <div className="singleDiscription">
                    {data.description   }
                </div>
                <div className="singlePrice">
                    &#8377;{data.price}
                </div>
                <div className='singleAddBtn'>
                    <Link onClick={() => clickHandler(data)}>Add To Cart</Link>
                </div>

            </div> */}  



            <div className="wrapper">
                <div className="singleProductContainer">
                    <div className="productImageContainer">
                        <div className="mainImageContainer">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="smallImageContainer"></div>

                    </div>
                    <div className="productInformationContainer">
                        <div className="singleTitleContainer">
                            <h2>{data.title}</h2>
                        </div>
                        <div className="singleRatingContainer">
                            <img src="https://toppng.com/public/uploads/preview/five-star-rating-11549726812abjskp8qz8.png" alt="" srcset="" width={"100px"} height={"50px"} />
                            {/* <h3>{data.rating.rate}</h3> */}
                        </div>
                        <div className="singlePriceContainer">
                            <h4>&#8377;{data.price}</h4>
                        </div>
                        <div className="singleDescriptionContainer">
                            <h3>Description</h3>
                            <p>{data.description}</p>
                        </div>
                        <div className="buttonContainer">
                            <div className="addCartBtn">
                                <button onClick={()=>clickHandler(data)}>Add To Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct