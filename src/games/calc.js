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
  const numberOfOperators = operators.lengt;
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const operator = operators[generateRandomNumber(0, numberOfOperators - 1)];
  const answer = calculate(number1, number2, operator);

  return [`${number1} ${operator} ${number2}`, answer.toString()];
};

const generateRounds = () => {
  const rounds = [];
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  return rounds;
};

const runCalc = () => {
  runBrainGames(generateRounds(), description);
};

export default runCalc;
