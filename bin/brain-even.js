#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runEven, rules } from '../src/games/even.js';

runBrainGames(runEven(), rules);
