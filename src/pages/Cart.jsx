import React from 'react'
import ProductCardHorizontal from '../components/ui/ProductCardHorizontal ';

import {useCart} from "../context/FunctionalitiesContext"
const Cart = () => {
  const {cart} = useCart();
  return (
    <div className='cartItems' >
      {cart.length !== 0 ? (
        cart.map((item,idx)=>(
        <div><ProductCardHorizontal item={item} key={idx}></ProductCardHorizontal></div>
      )) ): (
        <div>Cart is empty</div>
      )}
    </div>
  )
}

export default Cart