
import { WORDS } from "./words.js"

const NUM_GUESSES = 6;
let guessesRemaining = NUM_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessStr = WORDS[ Math.floor( Math.random() * WORDS.length)]
console.log(rightGuessStr);
