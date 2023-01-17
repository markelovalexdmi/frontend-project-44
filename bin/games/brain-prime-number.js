import readlineSync from 'readline-sync';
import randomNumber from '../../src/random-number.js';
import answer from '../../src/answer.js';
import primeNumber from '../../src/prime-number.js';

const primeOrNot = (inputName) => {
  const minRandom = 1;
  const maxRandom = 100;
  const maxPrime = 2;
  const correctAnswerNum = 3;

  let correctAnswer;
  let randomPrime;

  let userAnswer;
  let i = 1;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (i <= correctAnswerNum) {
    randomPrime = randomNumber(minRandom, maxPrime);
    switch (randomPrime) {
      case 1:
        console.log(`Number: ${primeNumber(maxRandom, 1)}`);
        correctAnswer = 'yes';
        break;
      default:
        console.log(`Number: ${primeNumber(maxRandom, 2)}`);
        correctAnswer = 'no';
        break;
    }

    userAnswer = readlineSync.question('Your answer: ');
    if (answer(correctAnswer, userAnswer, inputName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${inputName}!`);
};

export default primeOrNot;
