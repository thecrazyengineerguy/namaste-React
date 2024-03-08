import Rescards from "./Rescards";
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

// local state varaible - super powreful variable
const [listOfRestaurants, setListOfRestaurants]= useState([]);  

  useEffect(()=>{
      fetchData();
  },[])


const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
  const json = await data.json();
  console.log(json);
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
}

const onlineStatus = useOnlineStatus();
  if(listOfRestaurants.length === 0){
    console.log("shimmer called");
    return <Shimmer/>;
  }
    return(
      <div className="body" >
        <div className="filter">
        <div class="relative">
          <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
          <input type="text" class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name=""></input>
          <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
        </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-20">
            Customers also purchased
            </h2>
        </div>
        
        <div className="flex flex-wrap hover:">
            {listOfRestaurants.map((restaurant)=>
            (<Link key={restaurant.info.id} to = {"/restaurants/"+ restaurant.info.id}><Rescards resData ={restaurant}/></Link>)
            )}
        </div>
      </div>
    )
  }

  export default Body;
  