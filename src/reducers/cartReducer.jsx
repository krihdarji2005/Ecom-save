import React from 'react'

const cartReducer = (state,{type,payload}) => {
  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart:[...state.cart,payload.item]
      };
 
  
    default:
      return state;
  }
}

export default cartReducer