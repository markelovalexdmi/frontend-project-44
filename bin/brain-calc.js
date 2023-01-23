#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runCalc, description } from '../src/games/calc.js';

runBrainGames(runCalc(), description);
