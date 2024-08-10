const SECONDS = 3;
let count = 0;

const container = document.querySelector(".container");
const queue = document.querySelector("#count");
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", () => increaseCnt(1));

function increaseCnt(val) {
  count += val;
  queue.innerHTML = count;

  // If the count is 1, then only start processing the queue immediately
  if (count === 1) {
    handleBtnClick();
  }
}

function handleBtnClick() {
  if (count > 0) {
    let loadingBar = document.createElement("div");
    loadingBar.style.border = "1px solid black";
    loadingBar.style.marginTop = "10px";

    let progressBar = document.createElement("div");
    progressBar.style.height = "20px";
    progressBar.style.width = "0%";
    progressBar.style.backgroundColor = "red";
    progressBar.style.transition = `width ${SECONDS}s linear`;

    loadingBar.appendChild(progressBar);
    container.appendChild(loadingBar);

    // Trigger the progress bar animation in the next event loop
    // Immediate Animation Trigger: Normally, if you set the width to 100% right after setting it to 0%, the browser may not recognize it as a change, and the animation may not occur as expected. This is because the browser can batch style changes and might not register the transition.
    
    // Using setTimeout: By using setTimeout with a delay of 0, you're effectively telling the browser to wait until the current call stack is cleared (the current execution context is complete) and then execute the code inside setTimeout.
    // This small delay ensures that the browser has time to apply the initial width: 0% and then, in the next event loop, changes it to 100%. This triggers the transition defined in CSS (transition: width 3s linear;), resulting in a smooth animation.

    setTimeout(() => {
      progressBar.style.width = "100%";
    }, 0);

    // To have loading bar in sequence, only after current transition end
    progressBar.addEventListener("transitionend", () => {
      count--;
      queue.innerHTML = count;

      // Start the next loading bar if there's one in the queue
      if (count > 0) {
        handleBtnClick();
      }
    });
  }
}
