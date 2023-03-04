// 넣어야 하는 기능
// 1. title을 누르면 셀렉트 페이지가 보여야 한다 .
// 2. 근데 자연스럽게 하기 위해서는

// 위에 컨테이너는 80vh
// footer는 20 vh
// selectpage는 글자가 들어가는 부분에 들어가면 되겠다.
// 그리고 typeText 는 display:none 처리
// 그리고 셀렉트 페이지 자연스럽게 하기 위해서는 위치랑 넓이 값만 조절해주면 되겠다.

const selectPage = document.querySelector(".select-page");
const titleText = document.querySelector(".typeText");
const background = document.querySelector(".header");
const footer = document.querySelector(".footer");

titleText.addEventListener("click", function () {
  selectPage.classList.remove("hide");
  titleText.classList.add("hide");
  background.style.height = "80vh";
  footer.style.height = "20vh";
});
