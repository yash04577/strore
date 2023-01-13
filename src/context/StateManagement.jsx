import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react'
import Context from './Context'


const StateManagement = (props) => {

    const [products, setProducts] = useState([]);
    // const [newProduct, setNewProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [cartItems, setCartItem] = useState([]);

    const getData = () =>{
        return products;
    }

    const setData = (data) =>{
        setProducts([...data]);
    }

    const getAllProduct = async() =>{
        const {data} = await axios.get(`https://fakestoreapi.com/products`);
        // setProducts([...data]);
        setProducts([]);
        setProducts([...data]);

    }

    const getCategory = () => {
        return category;
    }

    const setCat = (cat) =>{
        setCategory(cat);
    }

    const getCartItems = () => {
        return cartItems;
    }

    const updateCartItems = (item) => {
        setCartItem(cartItems=>[...cartItems, item])
    }


    const updateData = (filter) =>{
        // products.filter((elem)=>{
        //     if(elem.category === "electronics"){

        //         setNewProducts(newProduct =>[...newProduct, elem]);
        //         console.log("filter test ", elem);
        //     }
        // })
        // getAllProduct();
        setProducts(products.filter(item => item.category === filter))
    }
    
  return (
    <Context.Provider value={{getData, setData, updateData, getAllProduct, getCategory, setCat, getCartItems, updateCartItems}}>
        {props.children}
    </Context.Provider>
  )
}

export default StateManagement