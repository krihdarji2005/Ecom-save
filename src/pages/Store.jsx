import React, { useState, useEffect, useContext } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { DataContext } from "../context/ContextApi";
import Loader from "../components/ui/Loader";
import ProductCardVertical from "../components/ui/ProductCardVertical";
import SplitText from "../SplitText/SplitText.jsx";
import ShimmerLoader from "../components/ui/ShimmerLoader";
import toast from 'react-hot-toast';
const Store = () => {
  const { items, loading, error } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setCategories([]);
        console.error("Error fetching products data:", error);
      }
      finally{
        toast('Welcome to KrishCart!!', {
          icon: '👏',
        });
      }
    };
    fetchCategories();
  }, []);
  if (loading) return <ShimmerLoader count={8} />;
  if (error) return <div>Error:{error}</div>;

  if (!items || items.length === 0) {
    return (
      <div>
        <h2>No Items in Stock</h2>
      </div>
    );
  }

  let filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (selectedCategory !== "all") {
    filteredItems = filteredItems.filter(
      (item) => item.category && String(item.category.id) === selectedCategory
    );
  }
  if (sortBy === "low-to-high") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-to-low") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }

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
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-dropdown"
        >
          <option value="default">Sort </option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="category-chips-container">
        <div className="category-chips-scroll">
          <div
            className={`category-chip${selectedCategory === "all" ? " selected" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            <span className="category-chip-img all">All</span>
          </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-chip${selectedCategory === String(cat.id) ? " selected" : ""}`}
              onClick={() => setSelectedCategory(String(cat.id))}
            >
              <img src={cat.image} alt={cat.name} className="category-chip-img" />
              <span className="category-chip-name">{cat.name}</span>
            </div>
          ))}
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
