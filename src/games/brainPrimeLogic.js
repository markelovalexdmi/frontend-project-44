import generateRandomNum from '../helpers/randomNumber.js';
import generatePrimeArray from '../helpers/primeArray.js';
import generateNotPrimeArray from '../helpers/notPrimeArray.js';

const maxNumInArray = 100;
const primeArray = generatePrimeArray(maxNumInArray);
const notPrimeArray = generateNotPrimeArray(maxNumInArray);

const runPrime = () => {
  const minRandom = 1;
  const minRandomArray = 0;
  const maxPrime = 2;

  let correctAnswer;
  let number;

  const randomPrime = generateRandomNum(minRandom, maxPrime);

  switch (randomPrime) {
    case 1:
      number = generateRandomNum(minRandomArray, primeArray.length - 1);
      console.log(`Question: ${primeArray[number]}`);
      correctAnswer = 'yes';
      break;
    case 2:
      number = generateRandomNum(minRandomArray, notPrimeArray.length - 1);
      console.log(`Question: ${notPrimeArray[number]}`);
      correctAnswer = 'no';
      break;
    default:
      throw new Error(`Unknown order state: '${randomPrime}'!`);
  }
  return correctAnswer;
};
export default runPrime;
