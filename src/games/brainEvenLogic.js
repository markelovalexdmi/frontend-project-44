import generateRandomNum from '../helpers/randomNumber.js';

const runEven = () => {
  const minRandom = 1;
  const maxRandom = 100;

  const number = generateRandomNum(minRandom, maxRandom);
  console.log(`Question: ${number}`);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};
export default runEven;
