#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runProgress, rules } from '../src/games/progress.js';

runBrainGames(runProgress(), rules);
