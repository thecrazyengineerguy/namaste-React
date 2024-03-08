import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import Heading from "./components/Heading";
import Search from "./components/Search";
import RestaurantMenu from "./components/RestaurantMenu";
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    
    <div className="app">
    <Search/>
    {<Heading />}
    <Outlet/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout/>,
  children: [
  {
    path: "/",
    element: <Body/>
  },
   {
    path: "/about",
    element: <About/>
  },{
    path: "/about",
    element: <About/>
  },
  {
    path: "/contacts",
    element: <Contacts/>
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu/>
  },
  {
    path: "/grocery",
    element: <Suspense fallback><Grocery/></Suspense>
  }
],
  errorElement: <Error/>
},
])

root.render(<RouterProvider router={appRouter}/>);

