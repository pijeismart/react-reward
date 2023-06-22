import React from "react";

const TransactionHistory = ({transactionData}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
            <tbody>
                {transactionData.map((transaction) => (
                <tr key={transaction.id} className="table-row">
                    <td>{transaction.id}</td>
                    <td>{transaction.customerName}</td>
                    <td>{transaction.date}</td>
                    <td>${transaction.amount}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;