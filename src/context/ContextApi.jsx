import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const ContextApi = ({children}) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreItems = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching products data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStoreItems();
  }, []);

  return (
    <DataContext.Provider value={{ items, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
