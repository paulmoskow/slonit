function createLogger() {
  let messages = [];

  return {
    log: function(message) {
      messages.push(message);
    },
    getLogs: function() {
      return messages;
    }
  };
}

const newLogger = createLogger();

newLogger.log('This is first message');
newLogger.log('this is second one');
newLogger.log('one more');
newLogger.log('don\'t stop me now');

console.log(newLogger.getLogs());


//a function that generates random number within a diapason and keeps diapasons values inside a closure

function createRandomGenerator(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const randomGenerator = createRandomGenerator(1, 100);
console.log(randomGenerator());
