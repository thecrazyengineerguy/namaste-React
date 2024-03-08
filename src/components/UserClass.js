import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            userInfo: {
                name: "Dummy",
                Location: "Dehradun",
                avatar_url: "https://avatars.githubusercontent.com/u/84617672?v=4"

        },
        // console.log("Child constructor");
    }
}

    async componentDidMount() {
        // console.log("Child did mount");

        const data = await fetch("https://api.github.com/users/thecrazyengineerguy");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
    render(){

        const {name,login,avatar_url} = this.state.userInfo;
        const {count} = this.state;
        // console.log("Child render");
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>Hey welcome to user Class based component</h1>
                <h2>Name : {name}</h2>
                <h2>Login : {login}</h2>
                <h2>Contact: 8618243505</h2>
            </div>
        )
    }
}

export default UserClass;