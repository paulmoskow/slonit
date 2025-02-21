function makeFirstCharUppercase(string) {
  let firstCharUpperCased = string[0].toUpperCase();
  let textUpperCased = firstCharUpperCased + string.slice(1);

  return textUpperCased;
}


function makeStringShorter(string, maxLength) {
  let finalShortString = string;
  //проверяем длину строки, чтобы не заканчивать троеточием короткие строки
  if (finalShortString.length > maxLength) {
    let shortString = finalShortString.slice(0, maxLength - 1);
    //создаем массив всех возможных последних символов строки
    const lastChar = [' ', ',', '.', '!', '?', ':', ';'];
    let indexOfLastChar = -1;
    //проверяем, есть ли подходящий элемент для обрезки строки, и находим его индекс
    for (let char of lastChar) {
      let item = shortString.lastIndexOf(char);
      if (item > indexOfLastChar) {
        indexOfLastChar = item;
      }
    }
    finalShortString = indexOfLastChar > -1 ? shortString.slice(0, indexOfLastChar) + '…' : shortString + '…';
  }

  return finalShortString;
}


function checkSubString(stringOne, stringTwo) {
  return stringOne.includes(stringTwo) || stringTwo.includes(stringOne) ? true : false;
}




