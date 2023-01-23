#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runPrime, description } from '../src/games/prime.js';

runBrainGames(runPrime(), description);
