const prices = [1, 2];
// const maxProfit = (prices) => {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let profit = prices[j] - prices[i];

//         if (profit > maxProfit) {
//           maxProfit = profit;
//         }
//       }
//     }
//   }

//   return maxProfit;
// };

const maxProfit = (prices) => {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      l = r;
    }
    r++;
  }

  return maxProfit;
};

console.log(maxProfit(prices));
