import generateRandomNum from '../helpers/randomNumber.js';

const runProgress = () => {
  const minRandom = 1;
  const maxRandom = 10;
  const maxRandomPlace = 10;

  let correctAnswer;
  let number1;
  let output;

  number1 = generateRandomNum(minRandom, maxRandom);
  output = '';
  const number2 = generateRandomNum(minRandom, maxRandom);
  const randomPlace = generateRandomNum(minRandom, maxRandomPlace);

  for (let j = 1; j <= maxRandomPlace; j += 1) {
    if (j === randomPlace) {
      output = `${output} ..`;
      correctAnswer = number1;
      number1 += number2;
    } else {
      output = `${output} ${number1.toString()}`;
      number1 += number2;
    }
  }
  console.log(`Question: ${output.trim()}`);
  return correctAnswer;
};
export default runProgress;
