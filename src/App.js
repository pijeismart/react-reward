import React, {useState, useEffect} from "react";
import { fetchTransactionData } from "./utils";
import { Appbar } from "./components/Appbar";
import { Loading } from "./components/Loading";
import TransactionHistory from "./components/TransactionHistory";
import RewardPoint from "./components/RewardPoint";
import "./styles/main.scss"

function App() {
  const [loading, setLoading] = useState(true);
  const [transactionData, setTransactionData] = useState([]);
  const [rewardsData, setRewardsData] = useState([]);
  const [showPoints, setShowPoints] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactionData();
        setTransactionData(data);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCalculatePoints = () => {
    // Calculate reward points
    const calculateRewardPoints = () => {
      const rewardsMap = new Map();

      transactionData.forEach((transaction) => {
        const { id, customerId, customerName, date, amount } = transaction;
        const month = new Date(date).toLocaleString("default", {
          month: "long"
        });

        const highPoints = Math.max(amount - 100, 0) * 2;
        const midPoints = Math.max(Math.min(amount, 100) - 50, 0);

        const totalPoints = highPoints + midPoints;

        if (!rewardsMap.has(customerId)) {
          rewardsMap.set(customerId, {
            id,
            customerName,
            points: {}
          });
        }

        if (!rewardsMap.get(customerId).points[month]) {
          rewardsMap.get(customerId).points[month] = 0;
        }

        rewardsMap.get(customerId).points[month] += totalPoints;
      });

      setRewardsData(Array.from(rewardsMap.values()));
    };

    calculateRewardPoints();
    setShowPoints(true);
  };

  return (
    <div className="app">
      <Appbar title="Reward" url="reward.png"/>
        <div className="container">
          <h2 className="app-title">Transaction History</h2>
          <button className="btn" onClick={handleCalculatePoints}>Calculate Points</button>
          {loading ? (
            <Loading />
            ) : (
              <>
              <TransactionHistory transactionData={transactionData} />
              {showPoints && (
                <RewardPoint rewardsData={rewardsData} />
              )}
              </>
            )}
        </div>
    </div>
  );
}

export default App;
