import React, { useContext } from 'react'
import Context from "../context/Context"
import Card from './Card';


const Cart = () => {

    const context = useContext(Context);

    return (
        <>
            <div className="cartContainer">

                {
                    context.getCartItems().map((elem) => {

                        return (
                            <Card elemData={elem}></Card>
                        )

                    })
                }
            </div>

        </>
    )
}

export default Cart