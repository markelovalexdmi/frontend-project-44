#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runEven, description } from '../src/games/even.js';

runBrainGames(runEven(), description);
