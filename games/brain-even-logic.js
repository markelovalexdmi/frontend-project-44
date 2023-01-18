import userName from '../bin/brain-games.js';
import userReply from '../src/index.js';
import randomNumber from '../src/random-number.js';

const evenOrNot = () => {
  const minRandom = 1;
  const maxRandom = 100;
  const correctAnswerNum = 3;

  let correctAnswer;
  let number;
  let i = 1;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (i <= correctAnswerNum) {
    number = randomNumber(minRandom, maxRandom);
    console.log(`Question: ${number}`);
    correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (userReply(correctAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default evenOrNot;
