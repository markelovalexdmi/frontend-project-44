import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const runPrime = () => {
  runBrainGames(generateRound, description);
};

export default runPrime;
