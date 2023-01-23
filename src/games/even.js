import generateRandomNumber from '../helpers/randomNumber.js';

const isEven = (number) => number % 2 === 0;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const runEven = () => {
  const rounds = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    const number = generateRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    rounds.push([number, correctAnswer]);
  }
  return rounds;
};
