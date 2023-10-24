function myLang(evt, lang) {
  let tabContent = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  let tabLink = document.getElementsByClassName("tab-link");

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" active", " ");
  }

  document.getElementById(lang).style.display = "block";
  evt.currentTarget.className += " active";
}
