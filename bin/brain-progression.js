#!/usr/bin/env node

import runBrainGames from '../src/index.js';
import { runProgress, description } from '../src/games/progress.js';

runBrainGames(runProgress(), description);
