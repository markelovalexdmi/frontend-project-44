import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const round = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
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

const runEven = () => {
  runBrainGames(generateRounds(), description);
};

export default runEven;
