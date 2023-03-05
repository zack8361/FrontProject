const fullScreen = document.querySelector(".fullBtn > i");
let isFull = false;
//전체 화면 처리
fullScreen.addEventListener("click", function () {
  if (fullScreen.classList.contains("fa-up-right-and-down-left-from-center")) {
    fullScreen.classList.remove("fa-up-right-and-down-left-from-center");
    fullScreen.classList.add("fa-down-left-and-up-right-to-center");
    document.documentElement.requestFullscreen();
  } else {
    fullScreen.classList.add("fa-up-right-and-down-left-from-center");
    fullScreen.classList.remove("fa-down-left-and-up-right-to-center");
    document.exitFullscreen();
  }
});
document.addEventListener("fullscreenchange", function () {
  if (fullScreen.classList.contains("fa-down-left-and-up-right-to-center")) {
    fullScreen.classList.remove();
  }
});
