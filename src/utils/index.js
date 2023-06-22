import { transactionData } from "../constants";

export const fetchTransactionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated transaction data
      resolve(transactionData);
    }, 2000); // Simulating a 2-second delay
  });
};