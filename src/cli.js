import readlineSync from 'readline-sync';

const playerName = () => {
  const name = readlineSync.question('Dear Player, May I have your name? ');
  console.log('Hello, ' + name + '!');
};

export default playerName;
