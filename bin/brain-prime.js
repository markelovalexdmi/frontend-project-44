#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runPrime, rules } from '../src/games/prime.js';

runBrainGames(runPrime(), rules);
