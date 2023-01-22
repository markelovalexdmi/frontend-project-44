#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runGcd, rules } from '../src/games/gcd.js';

runBrainGames(runGcd(), rules);
