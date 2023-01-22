#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runCalc, rules } from '../src/games/calc.js';

runBrainGames(runCalc(), rules);
