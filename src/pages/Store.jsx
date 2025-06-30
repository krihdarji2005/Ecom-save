import React from "react";

import { DataContext } from "../context/ContextApi";
import { useContext } from "react";
import Loader from "../components/ui/Loader";
import ProductCardVertical from "../components/ui/ProductCardVertical";

const Store = () => {
  const { items, loading, error } = useContext(DataContext);

  if (loading) return <Loader />;
  if (error) return <div>Error:{error}</div>;

  if (!items || items.length === 0) {
    return (
      <div>
        <h2>No Items in Stock</h2>
      </div>
    );
  }

  return (
    <>
    <div className="search-store">
      <div className="search-content">
        <input type="text" placeholder="Search Products here..." className="search-input"/>
      </div>
    </div>
    <div className="products-container">
      {items.map((item) => (
        <ProductCardVertical item={item} key={item.id}></ProductCardVertical>
      ))}
    </div>
    </>
  );
};

export default Store;
