//функция "myFilter" работает аналогично методу массивов "filter"

function myFilter(arr, fn) {
  let newArr = [];
  let index = 0;

  for (let item of arr) {
    if (fn(item)) {
      newArr[index] = item;
      index++;
    }
  }
  return newArr;
}

const numbers = [1, 2, 3, 4, 5];

//использование myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

//фильтрация чисел больше 3
const greaterThanThree = myFilter(numbers, (num) => num > 3);
console.log(greaterThanThree);
