const contextBtns = document.querySelectorAll(".contextBtn");

contextBtns.forEach((contextBtn) => {
  contextBtn.addEventListener("click", function () {
    contextBtn.classList.toggle("active"); // add the class active and remove it (toggling)
  });
});

// let pRefs = document.querySelectorAll("p");

// function handleToggleClick(idx) {
//   if (pRefs[idx - 1].style.display === "none") {
//     pRefs[idx - 1].style.display = "block";
//   } else {
//     pRefs[idx - 1].style.display = "none";
//   }
// }
