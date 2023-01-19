import generateRandomNum from '../helpers/randomNumber.js';

const runProgress = () => {
  const minRandom = 1;
  const maxRandom = 10;
  const maxRandomPlace = 10;

  let correctAnswer;
  let number1;
  let number2;
  let randomPlace;
  let output;

  number1 = generateRandomNum(minRandom, maxRandom);
  number2 = generateRandomNum(minRandom, maxRandom);
  randomPlace = generateRandomNum(minRandom, maxRandomPlace);
  output = '';

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
