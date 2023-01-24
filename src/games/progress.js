import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (number1, number2, progressionLength) => {
  const progression = [];
  for (let j = 0; j < progressionLength; j += 1) {
    const auxiliaryValue = number1 + number2 * j;
    progression.push(`${auxiliaryValue}`);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const number2 = generateRandomNumber(1, 10);
  const number1 = generateRandomNumber(1, 10);
  const hiddenIndex = generateRandomNumber(1, progressionLength);
  const progression = generateProgression(number1, number2, progressionLength);
  const answer = number1 + number2 * (hiddenIndex - 1);
  progression[hiddenIndex - 1] = '..';
  return [progression.join(' '), answer.toString()];
};

const generateRounds = () => {
  const rounds = [];
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  return rounds;
};

const runProgress = () => {
  runBrainGames(generateRounds(), description);
};

export default runProgress;
