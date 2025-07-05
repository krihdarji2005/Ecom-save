import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/FunctionalitiesContext';
import { DataContext } from '../../context/ContextApi';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai';
import Loader from '../ui/Loader'; // Import your Loader component

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, wishlist, cartDispatch } = useCart();
  const { items, loading, error } = useContext(DataContext); // Get items from DataContext
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Convert id to number since API ids are numbers
  const product = items?.find(item => item.id === parseInt(id));

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // Show loading state
  if (loading) return <Loader />;
  
  // Show error state
  if (error) return <div className="product-error">Error: {error}</div>;

  // Show not found message
  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const isInCart = cart.some(item => item.id === product.id);
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { item: { ...product, quantity } }
    });
  };

  const handleWishlistToggle = () => {
    cartDispatch({
      type: "TOGGLE_WISHLIST",
      payload: { item: product }
    });
  };

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        {/* Image Gallery */}
        <div className="product-image-section">
          <img 
            src={mainImage || product.images[0]} 
            alt={product.title}
            className="product-main-image"
          />
          <div className="product-thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} thumbnail ${index + 1}`}
                className={`product-thumbnail ${mainImage === img ? 'active-thumbnail' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          
          {product.category && (
            <div className="product-category">
              {product.category.image && (
                <img 
                  src={product.category.image} 
                  alt={product.category.name}
                  className="category-image"
                />
              )}
              <span className="category-name">{product.category.name}</span>
            </div>
          )}

          <div className="product-price">₹{product.price * 10}</div>

          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              i < 4 ? (
                <AiFillStar key={i} className="star-icon filled" />
              ) : (
                <AiOutlineStar key={i} className="star-icon" />
              )
            ))}
            <span className="rating-text">(120 reviews)</span>
          </div>

          <p className="product-description">{product.description}</p>


          {/* Action Buttons */}
          <div className="product-action-buttons">
            <button 
              className={`add-to-cart-btn ${isInCart ? 'disabled-cart-btn' : ''}`}
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              <AiOutlineShoppingCart className="cart-icon" />
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button 
              className="wishlist-btn"
              onClick={handleWishlistToggle}
            >
              {isInWishlist ? (
                <AiFillHeart className="wishlist-icon active" />
              ) : (
                <AiOutlineHeart className="wishlist-icon" />
              )}
              <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;