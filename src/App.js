import React from 'react';
import { Route } from "react-router-dom"
import homepage from "./home/Homepage";
import transaction from "./transaction/Transaction";


function App() {
    return (
        <div>
            <Route exact path="/" component={ homepage } />
            <Route exact path="/transaction-history" component={ transaction } />
        </div>
    )
}

export default App;
