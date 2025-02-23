const getMultiplicationResult = function (a, b) {
  return a*b;
}

const getDivisionResult = function (a, b) {
  return a/b;
}

const getAdditionResult = function (a, b) {
  return a+b;
}

const getSubtractionResult = function (a, b) {
  return a-b;
}

const operations = {
  multiply: getMultiplicationResult,
  divide: getDivisionResult,
  add: getAdditionResult,
  subtract: getSubtractionResult,
}

function calculate(a, b, simpleCalculate) {
  return simpleCalculate(a, b);
}

//select operation from: multiply, divide, add, subtract
const selectedOperation = "divide";

console.log(calculate(6, 3, operations[selectedOperation])); // 18
