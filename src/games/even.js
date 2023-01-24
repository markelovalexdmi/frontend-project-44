import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const generateRounds = () => {
  const rounds = [];
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  return rounds;
};

const runEven = () => {
  runBrainGames(generateRounds(), description);
};

export default runEven;
