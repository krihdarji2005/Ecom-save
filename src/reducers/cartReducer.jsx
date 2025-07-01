import React from "react";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.item],
      };

    case "TOGGLE_WISHLIST":
       const isInWishlist = state.wishlist.some(item => item.id === payload.item.id);
      return {
        ...state,
        wishlist: isInWishlist
          ? state.wishlist.filter(item => item.id !== payload.item.id)
          : [...state.wishlist, payload.item]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((currItem)=>currItem.id!==payload.item.id),
      };
   

    default:
      return state;
  }
};

export default cartReducer;
