import userName from '../bin/brain-games.js';
import userReply from '../src/index.js';
import randomNumber from '../src/random-number.js';

const gcd = () => {
  const minRandom = 1;
  const maxRandom = 60;
  const correctAnswerNum = 3;

  let number1;
  let number2;
  let counter;
  let correctAnswer;
  let i = 1;

  console.log('What is the result of the expression?');
  while (i <= correctAnswerNum) {
    number1 = randomNumber(minRandom, maxRandom);
    number2 = randomNumber(minRandom, maxRandom);

    counter = number1 > number2 ? number2 : number1;

    for (let j = 1; j <= counter; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        correctAnswer = j;
      }
    }
    if (correctAnswer === 1) {
      continue;
    }
    console.log(`Question: ${number1} ${number2}`);
    if (userReply(correctAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gcd;
