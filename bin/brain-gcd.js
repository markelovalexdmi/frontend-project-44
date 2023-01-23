#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runGcd, description } from '../src/games/gcd.js';

runBrainGames(runGcd(), description);
