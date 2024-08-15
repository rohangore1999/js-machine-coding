// Input Refs
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// Button Refs
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

// global ref for stop and start the interval
let countdownTimer = null;

start.addEventListener("click", startInterval);

function stopInterval(state) {
  start.innerHTML = state === "pause" ? "Continue" : "Start";

  start.style.display = "initial";
  stop.style.display = "none";

  clearInterval(countdownTimer);
}

function startInterval() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    return;
  }

  start.style.display = "none";
  stop.style.display = "initial";

  countdownTimer = setInterval(() => {
    timer();
  }, 1000);
}

function timer() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
  } else if (seconds.value != 0) {
    seconds.value = seconds.value - 1;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value = minutes.value - 1;
  } else if (hours.value != 0 && minutes.value == 0) {
    minutes.value = 60;
    hours.value = hours.value - 1;
  }
}

stop.addEventListener("click", function () {
  stopInterval("pause");
});

reset.addEventListener("click", function () {
  hours.value = "";
  minutes.value = "";
  seconds.value = "";

  stopInterval();
});
