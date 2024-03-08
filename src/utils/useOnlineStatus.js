import {useState , useEffect} from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);
   useEffect(()=>{
    window.addEventListener("online", () => setOnlineStatus(true))
    window.addEventListener("offline", () => setOnlineStatus(false))
   },[]);

    return onlineStatus;
}

export default useOnlineStatus;