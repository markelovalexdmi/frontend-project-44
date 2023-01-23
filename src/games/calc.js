import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'What is the result of the expression?';

const calculateAnswer = (number1, number2, randomSign) => {
  switch (randomSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${randomSign}'!`);
  }
};

const round = () => {
  const signs = ['+', '-', '*'];
  const maxInArray = 2;
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const randomSign = signs[generateRandomNumber(0, maxInArray)];
  const correctAnswer = calculateAnswer(number1, number2, randomSign);

  const output = [
    `${number1} ${randomSign} ${number2}`,
    `${correctAnswer}`,
  ];
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

const runCalc = () => {
  runBrainGames(generateRounds(), description);
};

export default runCalc;
