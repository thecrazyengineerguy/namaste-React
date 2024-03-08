import { useEffect , useState } from "react";
import { LOGO_URL }    from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("login");

  useEffect(()=> {
  },[btnNameReact]);

  const onlineStatus = useOnlineStatus();

    return (
      <div className="bg-white">
          <div className="logo-container">
            <img className="w-56 justify-between" src="https://th.bing.com/th/id/OIP.FpIiNcWsGUeuy4Ep5bZ3gQHaHa?w=980&h=980&rs=1&pid=ImgDetMain"/>
          </div>
          <div className="flex items-center">
            <ul className="flex justify-between p-4 m-10">
              <li className="px-2">
                Online Status : {onlineStatus ? "🟢" :  "🔴"}
              </li>
              <li className="px-2"><Link to="/">Home</Link></li>
              <li className="px-2"><Link to="/contacts">Contact us</Link></li>
              <li className="px-2"><Link to="/about">About us</Link></li>
              <li className="px-2"><Link to="/grocery">Grocery</Link></li>
              <li className="px-2">Cart</li>
              <li className="px-2"><button className="login-name" 
              onClick={()=>{
                console.log("clicked"); 
                btnNameReact === "login" 
                ? setBtnNameReact("logout") 
                : setBtnNameReact("login");
              }}>{btnNameReact}</button></li>
            </ul>
          </div>
      </div>
    )
  }

  export default Header;