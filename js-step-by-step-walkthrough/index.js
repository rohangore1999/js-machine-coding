const steps = ["3", "header", "8", "12", "footer"];
let index = 0;

// get dimensions by id
function highlight(id) {
  // checking if already popover and highlight exist, if then remove
  document.getElementById("highlight")?.remove();
  document.getElementById("popover")?.remove();

  const element = document.getElementById(id);

  // after getting elment, scoll to that element
  scrollTo(element);

  // get the dimensions
  const elementDimensions = element.getBoundingClientRect();

  // call helper function to add new element
  highlightHelper(elementDimensions);

  // adding popover
  popover(elementDimensions);
}

function highlightHelper(elementDimensions) {
  // it will create new element around the targeted element
  console.log({ elementDimensions });

  let top = elementDimensions.top + window.scrollY;
  let bottom = elementDimensions.bottom;
  let left = elementDimensions.left + window.scrollX;
  let right = elementDimensions.right;
  let height = elementDimensions.height;
  let width = elementDimensions.width;

  // create new element to highlight the target element
  const highlightEle = document.createElement("div");
  highlightEle.id = "highlight";
  highlightEle.style = `
    position: absolute;
    top: ${top - 4}px;
    bottom: ${bottom}px;
    left: ${left - 4}px;
    right: ${right}px;
    height:${height}px;
    width:${width}px;
    transition: border .2s ease;
  `;

  // add delay to see the transition
  setTimeout(() => {
    highlightEle.style.border = "4px solid black";
  }, 0);

  // append the element to the body
  document.getElementById("wrapper").appendChild(highlightEle);
}

// creating popover
function popover(elementDimensions) {
  let bottom = elementDimensions.bottom;
  let left = elementDimensions.left;
  let right = elementDimensions.right;

  let popoverElement = document.createElement("div");
  popoverElement.id = "popover";
  popoverElement.style = `
    position: absolute;
    top: ${bottom}px;
    left: ${(left + right) / 2 - 50}px;
    right: ${right}px;
    background: #fff;
    height: 100px;
    width: 100px;
  `;

  popoverElement.appendChild(navigationButton());

  document.getElementById("wrapper").appendChild(popoverElement);
}

// adding navigation button
function navigationButton() {
  let prevBtn = document.createElement("button");
  prevBtn.textContent = "prev";
  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      highlight(steps[--index]);
    }
  });

  let nextBtn = document.createElement("button");
  nextBtn.textContent = "next";
  nextBtn.addEventListener("click", function () {
    if (index < steps.length) {
      highlight(steps[++index]);
    }
  });

  let fragment = document.createDocumentFragment();

  fragment.appendChild(prevBtn);
  fragment.appendChild(nextBtn);

  return fragment;
}

// scroll to element(popover)
function scrollTo(element) {
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

highlight(steps[index]);
