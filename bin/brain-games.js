#!/usr/bin/env node
import playerName from "../src/cli.js";
import evenOrNot from "./brain-even.js";

console.log("Welcome to the Brain Games!");
const name = playerName();
evenOrNot(name);
