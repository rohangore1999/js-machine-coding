const cursor = document.querySelector(".cursor");
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357", "#33FF57"];

// listen to mouse event
document.addEventListener("mousemove", function (event) {
  mouseTracker(event.pageX, event.pageY);
});

function mouseTracker(xPos, yPos) {
  cursor.style.left = xPos + "px";
  cursor.style.top = yPos + "px";

  // to pick random color
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  cursor.style.color = randomColor;
}
