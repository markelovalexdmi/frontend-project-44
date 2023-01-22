import generateRandomNum from '../helpers/randomNumber.js';
import generatePrimeArray from '../primeArray.js';
import generateNotPrimeArray from '../notPrimeArray.js';

const maxNumInArray = 100;
const primeArray = generatePrimeArray(maxNumInArray);
const notPrimeArray = generateNotPrimeArray(maxNumInArray);

const getRandomPrime = () => {
  const prime = ['prime', 'not prime'];
  let question;
  let number;
  let correctAnswer;
  const primeOrNot = prime[generateRandomNum(0, 1)];
  switch (primeOrNot) {
    case 'prime':
      number = generateRandomNum(0, primeArray.length - 1);
      question = primeArray[number];
      correctAnswer = 'yes';
      break;
    case 'not prime':
      number = generateRandomNum(0, notPrimeArray.length - 1);
      question = notPrimeArray[number];
      correctAnswer = 'no';
      break;
    default:
      throw new Error(`Unknown order state: '${primeOrNot}'!`);
  }
  const randomPrime = [question, correctAnswer];
  return randomPrime;
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const runPrime = () => {
  const gameData = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    gameData.push(getRandomPrime());
  }
  console.log(gameData);
  return gameData;
};
