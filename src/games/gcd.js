import generateRandomNum from '../helpers/randomNumber.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const runGcd = () => {
  let correctAnswer;
  const gameData = [];
  const correctAnswerNum = 3;
  for (let i = 0; i < correctAnswerNum; i += 1) {
    const number1 = generateRandomNum(1, 100);
    const number2 = generateRandomNum(1, 100);
    const counter = number1 > number2 ? number2 : number1;
    for (let j = 1; j <= counter; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        correctAnswer = j;
      }
    }
    gameData.push([`${number1} ${number2}`, correctAnswer]);
  }
  console.log(gameData);
  return gameData;
};
