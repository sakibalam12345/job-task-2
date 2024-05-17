import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Pages/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [ 
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);