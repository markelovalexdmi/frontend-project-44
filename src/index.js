import userName from '../bin/brain-games.js';
import isAnswerCorrect from './helpers/userAnswer.js';
import showRules from './helpers/rules.js';
import showCongratulations from './helpers/congratulations.js';
import runEven from './games/brainEvenLogic.js';
import runCalc from './games/brainCalcLogic.js';
import runPrime from './games/brainPrimeLogic.js';
import runGcd from './games/brainGcdLogic.js';
import runProgress from './games/brainProgressLogic.js';

const runBrainGames = (gameAbbrev) => {
  const correctAnswerNum = 3;
  let correctAnswer;
  let i = 1;

  showRules(gameAbbrev);

  while (i <= correctAnswerNum) {
    switch (gameAbbrev) {
      case 'even':
        correctAnswer = runEven();
        break;
      case 'calc':
        correctAnswer = runCalc();
        break;
      case 'gcd':
        correctAnswer = runGcd();
        break;
      case 'prime':
        correctAnswer = runPrime();
        break;
      case 'progress':
        correctAnswer = runProgress();
        break;
      default:
        throw new Error(`Unknown order state: '${gameAbbrev}'!`);
    }
    if (isAnswerCorrect(correctAnswer, userName) === true) {
      i += 1;
    } else {
      return;
    }
  }
  showCongratulations(userName);
};
export default runBrainGames;
