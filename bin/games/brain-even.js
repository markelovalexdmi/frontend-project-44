import readlineSync from 'readline-sync';
import randomNumber from '../../src/random-number.js';
import answer from '../../src/answer.js';

const evenOrNot = (inputName) => {
  const minRandom = 1;
  const maxRandom = 20;
  const correctAnswerNum = 3;

  let correctAnswer;
  let number;
  let userAnswer;
  let i = 1;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i <= correctAnswerNum) {
    number = randomNumber(minRandom, maxRandom);
    console.log(`Number: ${number}`);
    userAnswer = readlineSync.question('Your answer: ');
    correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer(correctAnswer, userAnswer, inputName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${inputName}!`);
};
export default evenOrNot;
