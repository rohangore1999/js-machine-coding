const contextBtns = document.querySelectorAll(".contextBtn");

contextBtns.forEach((contextBtn) => {
  contextBtn.addEventListener("click", function () {
    contextBtn.classList.toggle("active"); // add the class active and remove it (toggling)
  });
});
