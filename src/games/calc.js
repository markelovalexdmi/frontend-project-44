import generateRandomNumber from '../helpers/randomNumber.js';
import runBrainGames from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const answer = calculate(number1, number2, operator);

  return [`${number1} ${operator} ${number2}`, answer.toString()];
};

const runCalc = () => {
  runBrainGames(generateRound, description);
};

export default runCalc;
