import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";



const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

        if (resInfo === null) return <Shimmer/>;

        const {name, cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
        const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <ul>
                {itemCards?.map((item) => 
                <li key ={item?.card?.info?.id} >
                    {item?.card?.info?.name} - {" Rs."} 
                    {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;