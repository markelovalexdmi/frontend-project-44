import generateRandomNumber from '../helpers/randomNumber.js';

export const description = 'What is the result of the expression?';

const expressionFromString = (number1, number2, randomSign) => {
  const output = eval(`${number1} ${randomSign} ${number2}`);
  return output;
};

const getRandomExpression = () => {
  const signs = ['+', '-', '*'];
  const maxInArray = 2;
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const randomSign = signs[generateRandomNumber(0, maxInArray)];
  const correctAnswer = expressionFromString(number1, number2, randomSign);
  const randomExpr = [
    `${number1} ${randomSign} ${number2}`,
    `${correctAnswer}`,
  ];
  return randomExpr;
};

export const runCalc = () => {
  const rounds = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    rounds.push(getRandomExpression());
  }
  return rounds;
};
