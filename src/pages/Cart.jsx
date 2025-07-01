import React from "react";
import ProductCardHorizontal from "../components/ui/ProductCardHorizontal ";
import SplitText from "../SplitText/SplitText.jsx";
import GradientText from "../GradientText/GradientText.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/FunctionalitiesContext";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { cart } = useCart();
  console.log("Cart Items:", cart);
  return (
    <div className="cartItems">
      <GradientText
        colors={[" #0f172a,  #1e293b,#334155,rgb(110, 110, 111),#000000 "]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <h1 className="wishlist-heading">
          Your Cart <FaShoppingCart color="black" size="20px" />
        </h1>
      </GradientText>

      {cart.length !== 0 ? (
        cart.map((item, idx) => (
          <div>
            <ProductCardHorizontal
              item={item}
              key={idx}
            ></ProductCardHorizontal>
          </div>
        ))
      ) : (
        <h1 className="splittextH1">
          <SplitText
            text={`No Items in Cart `}
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
      )}
      <div className="placeorder-div">
        <button className="PlaceOrder-btn">
          <span className="PlaceOrder-text">Place Order</span>
        </button>
        <button className="PlaceOrder-btn">
          <NavLink to="/store">Shop more</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Cart;
