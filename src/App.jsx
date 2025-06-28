
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import ErrorElement from './pages/ErrorElement';
import Home from './pages/Home';
import Store from './pages/Store';


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
        }
      ],

    },
  ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
