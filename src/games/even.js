import generateRandomNum from '../helpers/randomNumber.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const runEven = () => {
  const gameData = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    const number = generateRandomNum(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    gameData.push([number, correctAnswer]);
  }
  console.log(gameData);
  return gameData;
};
