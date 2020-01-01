import React from "react";
import { Link } from "react-router-dom"

const SideNavbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/transaction-history">Transaction history</Link>
        </div>
    )
}

export default SideNavbar;