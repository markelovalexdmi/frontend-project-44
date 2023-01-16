import readlineSync from 'readline-sync';

const playerName = () => {
  let nameInput = readlineSync.question('Dear Player, May I have your name? ');
  if (nameInput.length === 0) {
    nameInput = 'Stranger';
  }
  console.log(`Hello, ${nameInput}!`);
  return nameInput;
};

export default playerName;
