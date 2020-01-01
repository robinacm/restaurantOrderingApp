import React from "react";
import axios from "axios";

class transaction extends React.Component {
    state = {
        transactions:[]
    };

    componentDidMount(){
        this.getTransactions();
    }

    getTransactions = _ => {
        axios.get('/transactions')
            .then((data) => {
                console.log(data.data.transaction);
                this.setState({transactions: data.data.transaction});
            })
            .catch(error => console.log(error));
    };

    showTransactions = transaction => <div key={transaction.id}>{transaction.sum}</div>;

    render() {
        const { transactions } = this.state;
        return (
            <div>
                {transactions.map(this.showTransactions)}
            </div>
        );
    }
}

export default transaction;