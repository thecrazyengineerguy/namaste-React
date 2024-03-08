import User from "./User.js"
import UserClass from "./UserClass.js"
import React from "react"


class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor")
    }
    componentDidMount() {
        console.log("Parent did mount");
    }
    render() {
        console.log("Parent Render")
        return(
            <div className="about">
            <h1>About Us</h1>
            <p>Namaste is a food delivery app that helps you to find the best restaurants in your area.</p>
            {/* <User name ="Aman Kalal prop" count = "1"/> */}
            <UserClass name = "Aman Kalal class prop"/>
        </div>
        )
    }
}

// const About = ()=> {
//     console.log("About is called")
//     return(
//         <div className="about">
//             <h1>About Us</h1>
//             <p>Namaste is a food delivery app that helps you to find the best restaurants in your area.</p>
//             {/* <User name ="Aman Kalal prop" count = "1"/> */}
//             <UserClass name = "Aman Kalal class prop"/>
//         </div>
//     )
// }

export default About;