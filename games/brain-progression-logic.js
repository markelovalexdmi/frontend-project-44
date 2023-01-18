import userName from '../bin/brain-games.js';
import userReply from '../src/index.js';
import randomNumber from '../src/random-number.js';

const progression = () => {
  const minRandom = 1;
  const maxRandom = 10;
  const maxRandomPlace = 10;
  const correctAnswerNum = 3;

  let correctAnswer;
  let number1;
  let number2;
  let randomPlace;
  let output;
  let i = 1;

  console.log('What number is missing in the progression?');

  while (i <= correctAnswerNum) {
    number1 = randomNumber(minRandom, maxRandom);
    number2 = randomNumber(minRandom, maxRandom);
    randomPlace = randomNumber(minRandom, maxRandomPlace);
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
    if (userReply(correctAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default progression;
