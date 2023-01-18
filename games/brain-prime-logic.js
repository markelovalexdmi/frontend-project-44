import userName from '../bin/brain-games.js';
import userReply from '../src/index.js';
import randomNumber from '../src/random-number.js';
import primeNumber from '../src/prime-number.js';

const primeOrNot = () => {
  const minRandom = 1;
  const maxRandom = 100;
  const maxPrime = 2;
  const correctAnswerNum = 3;

  let correctAnswer;
  let randomPrime;
  let i = 1;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (i <= correctAnswerNum) {
    randomPrime = randomNumber(minRandom, maxPrime);
    switch (randomPrime) {
      case 1:
        console.log(`Question: ${primeNumber(maxRandom, 1)}`);
        correctAnswer = 'yes';
        break;
      default:
        console.log(`Question: ${primeNumber(maxRandom, 2)}`);
        correctAnswer = 'no';
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
export default primeOrNot;
