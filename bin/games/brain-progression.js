import readlineSync from 'readline-sync';
import randomNumber from '../../src/random-number.js';
import answer from '../../src/answer.js';

const progression = (inputName) => {
  const minRandom = 1;
  const maxRandom = 10;
  const maxRandomPlace = 10;
  const correctAnswerNum = 3;

  let correctAnswer;
  let number1;
  let number2;
  let randomPlace;
  let userAnswer;
  let i = 1;

  console.log('What number is missing in the progression?');

  while (i <= correctAnswerNum) {
    number1 = randomNumber(minRandom, maxRandom);
    number2 = randomNumber(minRandom, maxRandom);
    randomPlace = randomNumber(minRandom, maxRandomPlace);

    let output = number1.toString();

    for (let j = 1; j < maxRandomPlace; j += 1) {
      if (j === randomPlace) {
        output = `${output} ..`;
        correctAnswer = number1 + number2;
        number1 = number1 + number2;
      } else {
        number1 = number1 + number2;
        output = `${output} ${number1.toString()}`;
      }
    }
    console.log(output);
    userAnswer = readlineSync.question('Your answer: ');
    if (answer(correctAnswer, userAnswer, inputName) === true) {
      i += 1;
    } else {
      return;
    }
    console.log(`Congratulations, ${inputName}!`);
  }
};
export default progression;
