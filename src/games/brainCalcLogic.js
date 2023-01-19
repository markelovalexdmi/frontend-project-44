import generateRandomNum from '../helpers/randomNumber.js';

const runCalc = () => {
  const minRandom = 1;
  const maxRandom = 100;
  const maxRandomSign = 3;
  const maxRandomMultipl = 10;

  let correctAnswer;
  let number1;
  let number2;

  const randomSign = generateRandomNum(minRandom, maxRandomSign);
  switch (randomSign) {
    case 1:
      number1 = generateRandomNum(minRandom, maxRandom);
      number2 = generateRandomNum(minRandom, maxRandom);
      console.log(`Question: ${number1} + ${number2}`);
      correctAnswer = number1 + number2;
      break;
    case 2:
      number1 = generateRandomNum(minRandom, maxRandom);
      number2 = generateRandomNum(minRandom, number1);
      console.log(`Question: ${number1} - ${number2}`);
      correctAnswer = number1 - number2;
      break;
    case 3:
      number1 = generateRandomNum(minRandom, maxRandom);
      number2 = generateRandomNum(minRandom, maxRandomMultipl);
      console.log(`Question: ${number1} * ${number2}`);
      correctAnswer = number1 * number2;
      break;
    default:
      throw new Error(`Unknown order state: '${randomSign}'!`);
  }
  return correctAnswer;
};
export default runCalc;
