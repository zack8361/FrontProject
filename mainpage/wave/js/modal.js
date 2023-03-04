// // Header 화면 처리
// const fullScreen = document.querySelector("header .inner a:nth-child(3) > i");
// //전체 화면 처리
// fullScreen.addEventListener("click", function () {
//   if (fullScreen.classList.contains("fa-up-right-and-down-left-from-center")) {
//     document.documentElement.requestFullscreen();
//     fullScreen.classList.remove("fa-up-right-and-down-left-from-center");
//     fullScreen.classList.add("fa-down-left-and-up-right-to-center");
//   } else {
//     fullScreen.classList.add("fa-up-right-and-down-left-from-center");
//     fullScreen.classList.remove("fa-down-left-and-up-right-to-center");
//     document.exitFullscreen();
//   }
// });

// cmd 기능
const mac = document.querySelector(".cmd .inner .log .log-1");
const empty = document.querySelector(".empty");
const empty2 = document.querySelector(".empty2");
const errMsg =
  "은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.";
const input = document.querySelector(".cmd .inner .log .input");
const modal = document.getElementById("modal");
const modalWindow = document.querySelector("#modal .modal-window");
const modalBtn = document.querySelector(".modalBtn");
const btns = document.querySelector(".fa-qrcode");
const modalOver = document.querySelector("#modal.modal-overlay");
// //모달 닫기 버튼
const closeBtn = document.querySelector(".fa-circle-xmark");

//모달 닫기
closeBtn.addEventListener("click", function () {
  // modalWindow.classList.add("close");
  // modalOver.classList.add("close");
  empty.innerText = "";
  modal.style.display = "none";
});
btns.addEventListener("click", function () {
  // modalWindow.classList.remove("close");
  // modalOver.classList.remove("close");
  // modal.style.display = "flex";

  empty.innerText = "";
  modal.style.display = "flex";
});

function fnEnterkey() {
  // 1.엔터키를 누를때
  if (window.event.keyCode == 13) {
    empty.scrollTop = empty.scrollHeight - empty.clientHeight;
    if (
      input.value !== "whoami" &&
      input.value !== "pwd" &&
      input.value !== "exit" &&
      input.value !== "clear" &&
      input.value !== "ls" &&
      input.value !== "cd profile" &&
      input.value !== "cd main" &&
      input.value !== "cd chanho" &&
      input.value !== "cd minyoung" &&
      input.value !== "cd heehee" &&
      input.value !== "cd hojoon" &&
      input.value !== "cd .." &&
      input.value !== "cd git" &&
      input.value !== "cd home" &&
      input.value !== "cd ranking" &&
      input.value !== "cd music"
    ) {
      const dummy = document.createElement("div");
      dummy.innerHTML = mac.innerText;
      dummy.setAttribute("style", "color: black");
      empty.append(dummy);
      empty.append("`" + input.value + errMsg + "`");

      input.value = "";
    }
    //input = whoami
    else if (input.value === "whoami") {
      const whoami = document.createElement("div");
      whoami.innerHTML = mac.innerText;
      whoami.setAttribute("style", "color: black");
      empty.append(whoami);

      const command = document.createElement("span");
      command.style.color = "rgba(0, 0, 0, 0.5)";
      command.innerText = " : whoami";
      whoami.append(command);

      const profile = document.createElement("span");
      profile.style.color = "black";
      profile.innerText = "이찬호 / 송민영 / 조성희 / 김호준";
      profile.style.color = "dodgerblue";
      empty.append(profile);
      input.value = "";
    }
    //input = pwd
    else if (input.value === "pwd") {
      const pwd = document.createElement("div");
      pwd.innerHTML = mac.innerText;
      pwd.setAttribute("style", "color: black");
      empty.append(pwd);

      const pwdEx = document.createElement("span");
      pwdEx.style.color = "rgba(0,0,0,0.5)";
      pwdEx.innerText = ": pwd";
      pwd.append(pwdEx);

      const pwdText = document.createElement("span");
      pwdText.style.color = "black";
      pwdText.innerText = "https://github.com/HOJOON07/music";
      pwdText.style.color = "dodgerblue";
      empty.append(pwdText);

      input.value = "";
    }
    //input ==exit
    else if (input.value === "exit") {
      // modalWindow.classList.add("close");
      // modalOver.classList.add("close");
      modal.style.display = "none";
      input.value = "";
      empty.innerText = "";
      mac.classList.remove("profile");
      mac.innerText = "ch@ : MacBookAir ~ % \u00a0";
    }
    //input = clear
    else if (input.value === "clear") {
      //쌓인 div 삭제
      empty.innerText = "";
      input.value = "";
    }
    //input = ls (home 에서의 ls)
    else if (!mac.classList.contains("profile") && input.value === "ls") {
      const ls = document.createElement("div");
      ls.innerHTML = mac.innerText;
      ls.setAttribute("style", "color: black");
      empty.append(ls);

      const lsEx = document.createElement("span");
      lsEx.style.color = "rgba(0,0,0,0.5)";
      lsEx.innerText = ": ls";
      ls.append(lsEx);

      const lsProfile = document.createElement("span");
      lsProfile.style.color = "dodgerblue";
      lsProfile.innerText =
        "/home \u00a0 /ranking \u00a0 /music \u00a0 /profile \u00a0 /git";
      empty.append(lsProfile);
      input.value = "";
    }
    //cd profile 에서의 ls
    else if (mac.classList.contains("profile") && input.value === "ls") {
      const ls = document.createElement("div");
      ls.innerHTML = mac.innerText;
      ls.setAttribute("style", "color: black");
      empty.append(ls);

      const lsEx = document.createElement("span");
      lsEx.style.color = "rgba(0,0,0,0.5)";
      lsEx.innerText = ": ls";
      ls.append(lsEx);

      const lsProfile = document.createElement("span");
      lsProfile.style.color = "dodgerblue";
      lsProfile.innerText =
        "/chanho \u00a0 /minyoung \u00a0 /heehee \u00a0 /hojoon";
      empty.append(lsProfile);
      input.value = "";
    }
    //cd chanho
    else if (mac.classList.contains("profile") && input.value === "cd chanho") {
      window.open("https://github.com/zack8361");
      input.value = "";
    }
    //cd minyoung
    else if (
      mac.classList.contains("profile") &&
      input.value === "cd minyoung"
    ) {
      window.open("https://github.com/songmy1206");
      input.value = "";
    }
    //cd heehee
    else if (mac.classList.contains("profile") && input.value === "cd heehee") {
      window.open("https://github.com/HeeHeeHee-github");
      input.value = "";
    }
    //cd hoojoon
    else if (mac.classList.contains("profile") && input.value === "cd heehee") {
      window.open("https://github.com/HOJOON07");
      input.value = "";
    }
    //cd profile ㅎㅇ
    else if (input.value === "cd profile") {
      window.open("realProfile.html", "_self");
      input.value = "";
    }
    //cd git
    else if (input.value === "cd git") {
      const cd = document.createElement("div");
      mac.innerText = "ch@ : MacBookAir git % \u00a0";
      mac.setAttribute("style", "rgba(0,0,0,0.5)");
      mac.classList.add("profile");

      //위로 올라가는색
      cd.innerHTML = mac.innerText;
      cd.setAttribute("style", "color: black");
      empty.append(cd);

      //현재 색
      const lsEx = document.createElement("span");
      lsEx.style.color = "rgba(0,0,0,0.5)";
      lsEx.innerText = ": cd git";
      cd.append(lsEx);
      input.value = "";

      //profile 로 이동한 상태에서 ls
    }
    //input cd = profile 상황에서만 먹일수있슴
    else if (input.value === "cd ..") {
      mac.classList.remove("profile");
      const ls = document.createElement("div");
      mac.innerText = "ch@ : MacBookAir ~ % \u00a0";
      mac.setAttribute("style", "color: black");
      ls.innerHTML = mac.innerText;
      ls.setAttribute("style", "color: black");
      empty.append(ls);

      const lsEx = document.createElement("span");
      lsEx.style.color = "rgba(0,0,0,0.5)";
      lsEx.innerText = ": cd";
      ls.append(lsEx);
      input.value = "";
    }
    //input = cd main
    else if (input.value === "cd home") {
      window.open("index.html", "_self");
      input.value = "";
    } else if (input.value === "cd music") {
      window.open("playList.html", "_self");
      input.value = "";
    } else if (input.value === "cd ranking") {
      window.open("chart.html", "_self");
      input.value = "";
    }
  }
}
