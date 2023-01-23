import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let j = 2; j < number / 2; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const round = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const output = [number, correctAnswer];
  return output;
};

const generateRounds = () => {
  const rounds = [];
  const correctAnswersNumber = 3;
  for (let i = 0; i < correctAnswersNumber; i += 1) {
    rounds.push(round());
  }
  return rounds;
};

const runPrime = () => {
  runBrainGames(generateRounds(), description);
};

export default runPrime;
