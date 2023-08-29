"use strict";
const startButton = document.querySelector(".start");
const lowButton = document.querySelector(".low");
const highButton = document.querySelector(".high");
const correctButton = document.querySelector(".bingo");
const h1 = document.querySelector("h1");

let minRange = 1;
let maxRange = 100;
let currentGuess;

startButton.addEventListener("click", startGame);
lowButton.addEventListener("click", numberLow);
highButton.addEventListener("click", numberHigh);
correctButton.addEventListener("click", correct);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateComputerGuess() {
  currentGuess = randomNumber(minRange, maxRange);
  h1.textContent = `My guess is ${currentGuess}`;
}

function startGame() {
  startButton.disabled = true;
  highButton.disabled = false;
  lowButton.disabled = false;
  correctButton.disabled = false;
  updateComputerGuess();
}

// hej med dig
function numberHigh() {
  maxRange = currentGuess - 1;
  updateComputerGuess();
}

function numberLow() {
  minRange = currentGuess + 1;
  updateComputerGuess();
}

function correct() {
  h1.textContent = `Computer guessed the number!`;
  highButton.disabled = true;
  lowButton.disabled = true;
  correctButton.disabled = true;
  startButton.disabled = false;
  minRange = 1;
  maxRange = 100;
}
