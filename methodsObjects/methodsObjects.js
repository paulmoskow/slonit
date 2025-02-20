function sumObjectKeys(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log(sum);
  return sum;
}


function objectKeysSorted(obj) {
  let sortedList = [];
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sortedList.push(key);
    }
  }
  sortedList.sort((a, b) => obj[b] - obj[a]);
  return sortedList;
};

