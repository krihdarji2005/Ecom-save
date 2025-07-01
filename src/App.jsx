
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import ErrorElement from './pages/ErrorElement';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductDetails from "./components/layout/ProductDetails";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      errorElement:<ErrorElement/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"store",
          element:<Store/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:"wishlist",
          element:<Wishlist/>
        },
        {
          path:"store/:id",
          element:<ProductDetails/>
        },
      ],

    },
  ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
