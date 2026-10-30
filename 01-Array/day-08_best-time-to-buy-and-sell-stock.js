function maxProfit(prices){
    let minprices=Infinity;
    let maxprofit=0;
    for(let i=0; i<prices.length; i++){
        if (prices[i]<minprices){
            minprices=prices[i]
        }
        let profit=prices[i]-minprices;
        if(profit>maxprofit){
            maxprofit=profit
        }
    }
    return maxprofit
}
console.log(maxProfit([7,1,3,4,6,8]));