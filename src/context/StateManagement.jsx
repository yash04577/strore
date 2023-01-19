import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react'
import Context from './Context'


const StateManagement = (props) => {

    const[cartItemCount, setCartItemCount] = useState();
    const [products, setProducts] = useState([]);
    // const [newProduct, setNewProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [cartItems, setCartItem] = useState([]);
    const [singleproduct, setSingleProduct] = useState({});

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
        setCartItemCount(cartItems.length + 1)
    }

    const removeItemFromCart = (title) =>{
        setCartItem(cartItems.filter(item => item.title !== title));
        setCartItemCount(cartItems.length-1)
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

    const getSingleProduct = () =>{
        return singleproduct;
    }

    const updateSingleProduct = (elem) =>{
        setSingleProduct(elem);
    }

    const getCartItemCount = () => {
        return cartItemCount;
    }

    
    
  return (
    <Context.Provider value={{getData, setData, updateData, getAllProduct, getCategory, setCat, getCartItems, updateCartItems, removeItemFromCart, getSingleProduct, updateSingleProduct, getCartItemCount}}>
        {props.children}
    </Context.Provider>
  )
}

export default StateManagement