import React, { useState } from 'react'
import Ad from './Ad'
import Cart from './Cart'
import CartItem from './Context'
import Header from './Header'
import Main from './Main'

function Layout() {
  const[arrCart,setArrCart]=useState([]);
  console.log(arrCart);
  return (
    <div>
        <Header/>
        {/* <Ad/> */}
      <CartItem.Provider value={{arrCart,setArrCart}}>
        <Cart/>
        <Main/>
        </CartItem.Provider>
    </div>
  )
}

export default Layout