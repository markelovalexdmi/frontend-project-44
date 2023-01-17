import readlineSync from 'readline-sync';
import randomNumber from '../../src/random-number.js';
import answer from '../../src/answer.js';

const gcd = (inputName) => {
  const minRandom = 1;
  const maxRandom = 60;
  const correctAnswerNum = 3;

  let number1;
  let number2;
  let counter;
  let userAnswer;
  let correctAnswer;
  let i = 1;

  console.log('Find the greatest common divisor of given numbers.');

  while (i <= correctAnswerNum) {
    number1 = randomNumber(minRandom, maxRandom);
    number2 = randomNumber(minRandom, maxRandom);

    counter = number1 > number2 ? number2 : number1;

    for (let j=1; j <= counter; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        correctAnswer = j;
      }
    }

    if (correctAnswer === 1) {
      i -= 1;
      continue;
    }

    console.log(`Numbers: ${number1} ${number2}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (answer(correctAnswer, userAnswer, inputName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${inputName}!`);
};
export default gcd;
