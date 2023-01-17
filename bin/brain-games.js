#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../src/cli.js';
import evenOrNot from './games/brain-even.js';
import calculator from './games/brain-calculator.js';
import gcd from './games/brain-gcd.js';
import progression from './games/brain-progression.js';
import primeOrNot from './games/brain-prime-number.js';

console.log('Welcome to the Brain Games!');
const name = playerName();
const games = [
    'Even or not',
    'Calculator',
    'Greatest common divisor',
    'Gap in the progression',
    'Prime or not',
  ],
  index = readlineSync.keyInSelect(games, 'What game do you choose?');
switch (games[index]) {
  case 'Even or not':
    evenOrNot(name);
    break;
  case 'Calculator':
    calculator(name);
    break;
  case 'Greatest common divisor':
    gcd(name);
    break;
  case 'Gap in the progression':
    progression(name);
    break;
  case 'Prime or not':
    primeOrNot(name);
    break;
  default:
    console.log('Have a nice day!');
    break;
}
