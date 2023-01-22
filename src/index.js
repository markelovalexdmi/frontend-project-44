import readlineSync from 'readline-sync';
import userName from '../bin/brain-games.js';

const runBrainGames = (gameData, rules) => {
  console.log(rules);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of gameData) {
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');

    if (typeof correctAnswer === 'number') {
      userAnswer = Number(userAnswer);
    }
    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runBrainGames;
