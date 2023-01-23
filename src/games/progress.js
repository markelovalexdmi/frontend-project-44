import generateRandomNumber from '../helpers/randomNumber.js';

export const description = 'What number is missing in the progression?';

const generateRandomProgression = () => {
  const maxRandomPlace = 10;
  const number2 = generateRandomNumber(1, 10);
  const number1 = generateRandomNumber(1, 10);
  const randomPlace = generateRandomNumber(1, maxRandomPlace);
  const progression = [];
  for (let j = 0; j < maxRandomPlace; j += 1) {
    const auxiliaryValue = number1 + number2 * j;
    progression.push(`${auxiliaryValue}`);
  }
  const correctAnswer = number1 + number2 * (randomPlace - 1);
  progression[randomPlace - 1] = '..';
  const output = [progression.join(' '), `${correctAnswer}`];
  return output;
};

export const runProgress = () => {
  const rounds = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    rounds.push(generateRandomProgression());
  }
  return rounds;
};
