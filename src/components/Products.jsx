import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Context from '../context/Context';
import Card from './Card';


const Products = () => {

  const context = useContext(Context);
  const [products, setProducts] = useState([]);

  const GetAllProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    // setProducts([...data]);
    setProducts([...data]);


  }
  useEffect(() => {
    GetAllProducts();
  })


  return (
    <>
      {
        // context.getData().map((elem)=>{

        //     const data = {
        //         imageUrl : elem.image,
        //         title: elem.title,
        //         price: elem.price
        //     }

        //     // console.log(data);

        //     return(
        //         <Card elemData={data}></Card>
        //     )
        // })
        products.map((elem) => {

          if(context.getCategory() === ""){
  
              return (
                <Card elemData={elem}></Card>
              )
  
          }

          else{
            if (elem.category === context.getCategory()) {
             
              return (
                <Card elemData={elem}></Card>
              )
            }
  
          }

          

        })
      }
    </>
  )
}

export default Products