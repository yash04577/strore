import React, { useContext } from 'react'
import Context from "../context/Context"
import Card from './Card';


const Cart = () => {

    const context = useContext(Context);
    const incart = true;
    return (
        <>
            <div className="cartContainer">

                {
                    context.getCartItems().map((elem) => {

                        return (
                            <Card elemData={elem} cartCheck={incart}></Card>
                        )

                    })
                }
            </div>

        </>
    )
}

export default Cart