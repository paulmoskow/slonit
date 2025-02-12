function guessSecretNumber() {
  const secretNumber = Math.floor(Math.random() * 100);
  console.log("Computer 1: I've got a secret number");

  let min = 1;
  let max = 100;
  let answer = Math.floor((min + max)/2);
  let correctAnswer = false;

  while (!correctAnswer) {
    console.log(`Computer 2: Is it ${answer}?`);

    if (answer === secretNumber) {
      console.log(`Computer 1: Yes! It is ${secretNumber}`);
      correctAnswer = true;
    } else if (answer < secretNumber) {
      console.log(`Computer 1: No! It's bigger. Keep guessing`);
      min = answer + 1;
    } else {
      console.log(`Computer 1: No! It's smaller. Keep guessing`);
      max = answer - 1;
    }

    answer = Math.floor((min + max)/2)
  }
}

guessSecretNumber();
