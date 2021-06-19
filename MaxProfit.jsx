//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot acheve any profit, return 0.

var maxProfit = function (prices) {
    let max = Math.max(...prices);
    let maxprofit = 0;

    for ( i = 0; i < prices.length; i++ ) {
        if ( prices[i] < max) {
            max = prices[i]
        } else if ( prices[i] - max > maxprofit ) {
            maxprofit = prices[i] - max;
        }
    }

    return maxprofit;
};