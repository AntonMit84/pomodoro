const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const finishButton = document.getElementById('finish');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const tomatoContainer = document.getElementById('tomato-container');

let totalTime = 25 * 60; // 25 minutes in seconds
let timeRemaining = totalTime;
let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = totalTime;
  updateTimer();
  startButton.disabled = false;
}

function finishEarly() {
  clearInterval(timerInterval);
  addTomato();
  resetTimer();
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
  const seconds = (timeRemaining % 60).toString().padStart(2, '0');

  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    addTomato();
    // Add code for displaying a message or triggering a notification when the timer ends
  } else {
    timeRemaining--;
  }
}

function addTomato() {
  const tomatoImage = document.createElement('img');
  tomatoImage.src = './tomato.png'; //
  tomatoImage.classList.add('tomato-image');
  tomatoContainer.appendChild(tomatoImage);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
finishButton.addEventListener('click', finishEarly);


const clearTomatoesButton = document.getElementById('clear-tomatoes');
clearTomatoesButton.addEventListener('click', clearTomatoes);

function clearTomatoes() {
  tomatoContainer.innerHTML = '';
}


const pauseResumeButton = document.getElementById('pause-resume');
pauseResumeButton.addEventListener('click', pauseResumeTimer);

let timerPaused = false;

function pauseResumeTimer() {
  if (timerPaused) {
    timerInterval = setInterval(updateTimer, 1000);
    pauseResumeButton.textContent = 'Pause';
    timerPaused = false;
  } else {
    clearInterval(timerInterval);
    pauseResumeButton.textContent = 'Resume';
    timerPaused = true;
  }
}
// ..