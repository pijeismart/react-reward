import React from "react";

const RewardPoint = ({rewardsData}) => {
    return (
        <>
            <h2 className="app-title">Reward Points</h2>
            <table className="table point">
                <tbody>
                {rewardsData.map((customer) => (
                    <tr key={customer.id}>
                    <td className="table-cell">{customer.customerName}</td>
                    <td>
                        <table>
                        <thead>
                            <tr>
                            <th>Month</th>
                            <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(customer.points).map(
                            ([month, points]) => (
                                <tr className="table-row" key={month}>
                                <td>{month}</td>
                                <td>{points}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                        </table>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default RewardPoint;