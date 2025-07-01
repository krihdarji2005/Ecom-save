import React from "react";
import { useCart } from "../context/FunctionalitiesContext";
import ProductCardVertical from "../components/ui/ProductCardVertical";
import { NavLink } from "react-router-dom";
import GradientText from "../GradientText/GradientText.jsx";

const Wishlist = () => {
  const { wishlist } = useCart();

  return (
    <div className="wishlist-container">
     
        <GradientText
          colors={[" #0f172a,  #1e293b,#334155,rgb(110, 110, 111),#000000 "]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
           <h1 className="wishlist-heading">Your Wishlist </h1>
        </GradientText>
     

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <p>
            <GradientText
              colors={[" #0f172a,  #1e293b,#334155,  #1e40af,#000000 "]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Your wishlist is empty
            </GradientText>
          </p>
          <p>
            {" "}
            <GradientText
              colors={[" #0f172a,  #1e293b,#334155,  #1e40af,#000000 "]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              ❤️ Tap the heart icon on products to add them
            </GradientText>
          </p>
          <p>
            <button className="go-store-btn">
              <NavLink to="/store" className="go-store-link">
                Go to Store
              </NavLink>
            </button>
          </p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <ProductCardVertical
              key={item.id}
              item={item}
              showWishlistButton={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
