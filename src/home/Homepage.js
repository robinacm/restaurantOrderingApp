import React from "react";
import SideNavbar from "../common/component/SideNavbar";
import "./HomePage.css"

class homepage extends React.Component {
    render() {
        return(
            <div>
                <SideNavbar/>
                <h1>Homepage</h1>
            </div>
        )
    }
}

export default homepage;