import React, { Children, createContext, useState } from 'react'

export const DataContext = createContext();
export const ContextApi = () => {
 const [items,setItems]=useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCountryData = async () =>{
    try{
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    
  }
  return (
    <div>ContextApi</div>
  )
}

export default ContextApi