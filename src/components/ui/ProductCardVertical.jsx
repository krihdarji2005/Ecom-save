import React from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { useCart } from "../../context/FunctionalitiesContext";
import { NavLink } from "react-router-dom";

export default function ProductCardVertical({ item }) {
  const { cart, wishlist, cartDispatch } = useCart();
  const isItemInCart = cart?.some((curritem) => curritem.id === item.id);
  const isItemInWishlist = wishlist?.some(
    (curritem) => curritem.id === item.id
  );

  const handleAddToCartClick = () => {
    if (!isItemInCart) cartDispatch({ type: "ADD_TO_CART", payload: { item } });
  };
  const handleWishlistClick = () => {
    cartDispatch({ type: "TOGGLE_WISHLIST", payload: { item } });
  };
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <NavLink to={`/store/${item.id}`}>
          <img
            src={item.images?.[0] || item.images?.[1]}
            alt={item.title}
            style={styles.image}
          />
        </NavLink>
        <button
          style={styles.wishlistButton}
          aria-label="Add to wishlist"
          onClick={() => handleWishlistClick(item)}

        >
          {isItemInWishlist ? (
            <AiFillHeart size={20} color="red"/>
          ) : (
            <AiOutlineHeart size={20} />
          )}
        </button>
      </div>

      <div style={styles.content}>
        <NavLink to={`/store/${item.id}`} style={styles.title}>
          {item.title}
        </NavLink>
        <div style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} size={14} color="#FFD700" />
          ))}
          <a href="#" style={styles.ratingCount}>
            ( {item.id} )
          </a>
        </div>
        <p style={styles.description}>{item.description}</p>
        <span style={styles.price}>₹{item.price * 10}</span>
        <button
       
          onClick={handleAddToCartClick}
          style={isItemInCart ? styles.disabledCartButton : styles.cartButton}
          disabled = {isItemInCart}
        >
          <AiOutlineShoppingCart size={16} style={{ marginRight: 8 }} />
          {isItemInCart ? "Added to cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
// ✨ Inline CSS Styles (You can convert to CSS/SCSS later)
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "300px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    transition: "box-shadow 0.3s ease",
    margin: "1rem",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
 wishlistButton: {
    position: "absolute",
    bottom: "8px",
    right: "8px",
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "50%",
    padding: "8px 6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  content: {
    padding: "16px",
    borderTop: "1px solid #eee",
  },
  title: {
    fontWeight: "600",
    fontSize: "16px",
    textDecoration: "none",
    color: "#333",
  },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
  },
  ratingCount: {
    fontSize: "12px",
    color: "#666",
    marginLeft: "4px",
    textDecoration: "none",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    margin: "8px 0",
  },
  price: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#111",
    display: "block",
    marginBottom: "12px",
  },
  cartButton: {
    backgroundColor: "#1E90FF",
    color: "#fff",
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
    disabledCartButton: {
    backgroundColor: "#cccccc",
    color: "#666666",
    cursor: "not-allowed",
    // Keep other properties the same as cartButton
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
  }
};
