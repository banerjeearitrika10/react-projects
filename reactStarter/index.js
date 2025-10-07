import React from "react";
import ReactDOM from "react-dom/client";
import './src/App.css';
import About from "./src/components/About";
import Body from "./src/components/Body"
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,
    RouterProvider,} from "react-router-dom";
import Applayout from "./src/App";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Applayout/>,
            children:[
                {
                    path: "/",
                    element: <Body/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu/>
                }
            ],
            errorElement: <Error />
        },
       
    ],
    {
        future: {
          v7_startTransition: true,
        },
    })
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
