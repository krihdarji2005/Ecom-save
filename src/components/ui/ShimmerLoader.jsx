// ShimmerLoader.jsx
import React from "react";
import "./ShimmerLoader.css";

const ShimmerLoader = ({ count = 4 }) => {
  return (
    <div className="shimmer-store-container">
      {/* Search bar */}
      <div className="shimmer-search-bar"></div>
      
      {/* New Arrivals/Category chips */}
      <div className="shimmer-category-chips">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div className="shimmer-chip" key={idx}></div>
        ))}
      </div>
      
      {/* Product grid */}
      <div className="shimmer-products-grid">
        {Array.from({ length: count }).map((_, idx) => (
          <div className="shimmer-product-card" key={idx}>
            <div className="shimmer-product-image"></div>
            <div className="shimmer-product-content">
              <div className="shimmer-product-title"></div>
              <div className="shimmer-product-rating"></div>
              <div className="shimmer-product-desc"></div>
              <div className="shimmer-product-desc"></div>
              <div className="shimmer-product-desc"></div>
              <div className="shimmer-product-price"></div>
              <div className="shimmer-product-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerLoader;