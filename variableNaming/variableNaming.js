function getTotalPurchaseSum(clientsData) {
  let totalSum = 0;
  clientsData.forEach(sum => {
    totalSum += sum;
  });
  return totalSum;
}

let topClientsPurchases = [10000, 20000, 30000];
console.log(getTotalPurchaseSum(topClientsPurchases));
