import generateRandomNum from '../helpers/randomNumber.js';

const runGcd = () => {
  const minRandom = 1;
  const maxRandom = 100;

  let correctAnswer;

  const number1 = generateRandomNum(minRandom, maxRandom);
  const number2 = generateRandomNum(minRandom, maxRandom);

  const counter = number1 > number2 ? number2 : number1;

  console.log(`Question: ${number1} ${number2}`);

  for (let j = 1; j <= counter; j += 1) {
    if (number1 % j === 0 && number2 % j === 0) {
      correctAnswer = j;
    }
  }
  return correctAnswer;
};
export default runGcd;
