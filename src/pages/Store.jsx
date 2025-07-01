import React, { useState } from "react";

import { DataContext } from "../context/ContextApi";
import { useContext } from "react";
import Loader from "../components/ui/Loader";
import ProductCardVertical from "../components/ui/ProductCardVertical";
import SplitText from "../SplitText/SplitText.jsx";
const Store = () => {
  const { items, loading, error, setItems } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <Loader />;
  if (error) return <div>Error:{error}</div>;

  if (!items || items.length === 0) {
    return (
      <div>
        <h2>No Items in Stock</h2>
      </div>
    );
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-store">
        <div className="search-content">
          <input
            type="text"
            placeholder="Search Products here..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="products-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ProductCardVertical
              item={item}
              key={item.id}
            ></ProductCardVertical>
          ))
        ) : (
          <h1 className="splittextH1">
            <SplitText 
              text={`Sorry 😞 No Items Available with Name ${searchTerm}`}
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
      </div>
    </>
  );
};

export default Store;
