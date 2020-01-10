import React from "react";
import { Link } from "react-router-dom"
import  "./SideNavbar.css"

const SideNavbar = () => {
    return (
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/transaction-history">Transaction history</Link>
            <Link to="/booking-page">Book table</Link>
        </div>
    )
}

export default SideNavbar;