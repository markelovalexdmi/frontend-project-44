import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (beginningNumber, progressionStep, length) => {
  const progression = [];
  for (let j = 0; j < length; j += 1) {
    const auxiliaryValue = beginningNumber + progressionStep * j;
    progression.push(`${auxiliaryValue}`);
  }
  return progression;
};

const generateRound = () => {
  const length = 10;
  const beginningNumber = generateRandomNumber(1, 10);
  const progressionStep = generateRandomNumber(1, 10);
  const hiddenIndex = generateRandomNumber(1, length);
  const progression = generateProgression(beginningNumber, progressionStep, length);
  const answer = beginningNumber + progressionStep * (hiddenIndex - 1);
  progression[hiddenIndex - 1] = '..';
  return [progression.join(' '), answer.toString()];
};

const runProgress = () => {
  runBrainGames(generateRound, description);
};

export default runProgress;
