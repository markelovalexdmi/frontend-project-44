import readlineSync from 'readline-sync';
import welcome from './cli.js';

const runBrainGames = (rounds, description) => {
  const userName = welcome();
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of rounds) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runBrainGames;
