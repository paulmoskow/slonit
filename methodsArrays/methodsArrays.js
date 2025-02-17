
function mySlice(arr, start, end) {
  //проверка аргумента на массив
  if (!Array.isArray(arr)) {
    console.log(`${arr} не является массивом`);
    return;
  }

  //сохранение в переменные нового массива и крайних индексов
  const newArray = [];
  let newArrayStart;
  let newArrayEnd;

  //присвоение индексам значений аргументов с учетом отрицательных значений или отсутствия значения
  if (!start) {
    newArrayStart = 0;
  } else if (start >= 0) {
    newArrayStart = start;
  } else {
    newArrayStart = arr.length + start;
  }

  if (!end || end > arr.length) {
    newArrayEnd = arr.length;
  } else if (end > 0) {
    newArrayEnd = end;
  } else {
    newArrayEnd = arr.length + end;
  }

  //проверка последовательности индексов
  if ((newArrayStart > newArrayEnd || newArrayStart > arr.length)) {
    console.log('Значение первого индекса не может быть больше второго');
    return;
  }

  //цикл для перебора элементов заданного диапазона исходного массива и записи в новый массив
  for (let i = newArrayStart; i < newArrayEnd; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

let test = ["t", "e", "s", "t", "t", "e", "s", "t"];
let wrong = 2;

console.log(mySlice(test, 1, 13));

