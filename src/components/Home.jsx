import React, {useEffect, useContext} from 'react'
import Context from '../context/Context'
import Products from './Products'



const Home = () => {
  const context = useContext(Context);
  
  useEffect(() => {
   context.getAllProduct();
  }, [])
  

  return (
    <>
      <div className="productsContainer">
        <Products></Products>
      </div>
    </>
  )
}

export default Home