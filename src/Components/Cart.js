import React, { useContext,useEffect, useState } from 'react'
import AddToCart from './AddToCart'
import './Cart.css'
// import '../Pages/Item.css'
import CartItem from './Context'

function Cart() {
    const{arrCart}=useContext(CartItem);
    const[sum,setSum]=useState(0)
    const[sumItems,setSumItems]=useState(0)
    useEffect(() => {
        let total = 0;
        let totalItems=0;
        arrCart.forEach((item) => { total += item.price*item.amount })
        setSum(total)
        arrCart.forEach((item) => { totalItems += item.amount })
        setSumItems(totalItems)
      }, [arrCart])
  return (
    <div>
        <div className='cart'>Cart
        {arrCart.map(item=>{
            return(

                <div>
             <div className="titleCart">{item.title}</div>
             <img className='imgCart' src={item.image} alt="shmuel" />
             <AddToCart  item = {item} id = {item.id}/>             
             <div> <h4 className='priceCart'>{item.price} $</h4></div>
             </div>
                )
            })}
            <div>Total Price:{sum}$  ||  Total Items: {sumItems}</div>
        </div>
    </div>
  )
}

export default Cart