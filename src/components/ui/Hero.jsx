import React from "react";
import heroImg from "../../assets/heroImg.jpg"
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-section">
          <img src={heroImg} alt="Hero Banner" className="hero-image" />
          <div className="hero-content">
            <h1>Elevate Your Style</h1>
            <p>
              Discover the latest trends in fashion and tech. Shop our curated
              collection of clothing, accessories, and gadgets.
            </p>
            <button className="hero-btn">
              <NavLink to="/store">Buy Now</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
