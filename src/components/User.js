import {useState} from "react";

const User = (props) => {

    const [count,setCount] = useState(0);
 
 
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Hey welcome to user functional component</h1>
            <h2>Name :{props.name}</h2>
            <h2>Location : Bangal ore</h2>
            <h2>Contact: 8618243505</h2>
        </div>
    )
}

export default User;