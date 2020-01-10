import React from 'react';
import { Route } from "react-router-dom"
import homepage from "./home/Homepage";
import transaction from "./transaction/Transaction";
import Bookingpage from "./tableBooking/Bookingpage";

function App() {
    return (
        <div>
            <Route exact path="/" component={ homepage } />
            <Route exact path="/transaction-history" component={ transaction } />
            <Route exact path="/booking-page" component={ Bookingpage } />
        </div>
    )
}

export default App;
