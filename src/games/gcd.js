import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calculateGcd(number2, number1 % number2);
};

const round = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const correctAnswer = calculateGcd(number1, number2);
  const output = [`${number1} ${number2}`, `${correctAnswer}`];
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

const runGcd = () => {
  runBrainGames(generateRounds(), description);
};

export default runGcd;
