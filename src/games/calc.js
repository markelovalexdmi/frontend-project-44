import generateRandomNum from '../helpers/randomNumber.js';

export const rules = 'What is the result of the expression?';

const getRandomExpr = () => {
  const signs = ['+', '-', '*'];
  const randomSign = signs[generateRandomNum(0, 2)];
  const number1 = generateRandomNum(1, 100);
  let number2;
  let correctAnswer;
  switch (randomSign) {
    case '+':
      number2 = generateRandomNum(1, 100);
      correctAnswer = number1 + number2;
      break;
    case '-':
      number2 = generateRandomNum(1, number1);
      correctAnswer = number1 - number2;
      break;
    case '*':
      number2 = generateRandomNum(1, 10);
      correctAnswer = number1 * number2;
      break;
    default:
      throw new Error(`Unknown order state: '${randomSign}'!`);
  }
  const randomExpr = [`${number1} ${randomSign} ${number2}`, correctAnswer];
  return randomExpr;
};

export const runCalc = () => {
  const gameData = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    gameData.push(getRandomExpr());
  }
  console.log(gameData);
  return gameData;
};
