import userName from '../bin/brain-games.js';
import userReply from '../src/index.js';
import randomNumber from '../src/random-number.js';

const calculator = () => {
  const minRandom = 1;
  const maxRandom = 100;
  const maxRandomSign = 3;
  const maxRandomMultipl = 10;
  const correctAnswerNum = 3;

  let correctAnswer;
  let number1;
  let number2;
  let randomSign;
  let supportNumber;
  let i = 1;

  console.log('What is the result of the expression?');

  while (i <= correctAnswerNum) {
    randomSign = randomNumber(minRandom, maxRandomSign);
    number1 = randomNumber(minRandom, maxRandom);
    number2 = randomNumber(minRandom, maxRandom);
    switch (randomSign) {
      case 1:
        console.log(`Question: ${number1} + ${number2}`);
        correctAnswer = number1 + number2;
        break;
      case 2:
        if (number1 < number2) {
          supportNumber = number1;
          number1 = number2;
          number2 = supportNumber;
        }
        console.log(`Question: ${number1} - ${number2}`);
        correctAnswer = number1 - number2;
        break;
      default:
        number2 = randomNumber(minRandom, maxRandomMultipl);
        console.log(`Question: ${number1} * ${number2}`);
        correctAnswer = number1 * number2;
        break;
    }
    if (userReply(correctAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calculator;
