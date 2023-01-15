#!/usr/bin/env node
import playerName from '../src/cli.js';
import evenOrNot from './games/brain-even.js';
import calculator from './games/brain-calculator.js';

console.log('Welcome to the Brain Games!');
const name = playerName();
calculator(name);
