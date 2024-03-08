import {CDN_URL} from "../utils/constants";


const Rescards = (props) =>{
    const {resData} = props;
    console.log(props);
    const {name,avgRatingString,cloudinaryImageId,costForTwo,cuisines} = resData?.info;
  
    return(
      <div className="m-4 p-4 w-[250]">
          <img className="res-image" src={CDN_URL+ cloudinaryImageId}/>
          <h3 className="text-xl font-bold">{name}</h3>
          <h4>{avgRatingString}</h4> 
          <h4 className="cuisines">{cuisines.join(",")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{resData.info.sla.slaString}</h4>
      </div>
    )
  }

  export default Rescards;