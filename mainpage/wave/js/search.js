const data = song_data; //멜론차트 데이터
const rank = document.querySelectorAll(".rank");
const rankImg = document.querySelectorAll(".rankImg");
const rankNumber = document.querySelectorAll(".rankNumber");
const musicName = document.querySelectorAll(".musicName");
const artistName = document.querySelectorAll(".artistName");
const albumName = document.querySelectorAll(".albumName");
const searchResult = document.querySelector(".searchResult");
const mainHeader = document.querySelector(".header");
const mainFooter = document.querySelector(".footer");
const cardWrap2 = document.querySelector(".cardWrap");

// let isInputDisply = false;

//모달 Dom 선택
const cardmodal = document.querySelector(".cardmodal");
function Modalon() {
  cardmodal.style.display = "flex";
}

//기본 1~5위 까지 실시간 순위 만들어주는 함수
for (let i = 0; i < rank.length; i++) {
  rank[i].setAttribute("id", data[i].id);
  rankImg[i].setAttribute("src", data[i].albumCover);
  rankNumber[i].innerHTML = i + 1;
  musicName[i].innerHTML = data[i].song;
  artistName[i].innerHTML = data[i].singer;
}
//!!!!!
// 검색창 1~ 5위 순위에 있는 것들 addEventListener 모달창 띄우기
//!!!!!

for (let i = 0; i < rank.length; i++) {
  rank[i].addEventListener("click", function () {
    cardmodal.style.display = "flex"; //이거 맨마지막에
    //id값을 가져오고 filter로 데이터에서 추출해서 그거에 맞게 create 해주면 되겠다.
    const idNum = rank[i].id;
    const targetData = data.filter((el) => el.id == idNum);
    //1 젤 큰 div
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("cardWrap");
    //2 순위
    const rankNum = document.createElement("p");
    rankNum.classList.add("rankNum");
    // rankNum.innerText(idNum + 1);
    rankNum.textContent = Number(idNum) + 1;
    //3 이미지와 아이콘 랩 wrap
    const imgWrap = document.createElement("div");
    imgWrap.classList.add("imgWrap");
    //4 앨범 이미지 랩
    const albumWrap = document.createElement("div");
    albumWrap.classList.add("albumWrap");
    //5 앨범 이미지
    const albumImg = document.createElement("img");
    albumImg.classList.add("albumImg");
    albumImg.setAttribute("src", targetData[0].albumCover);
    //6 아이콘 div 폰트 어썸 아이콘은 visiblity로 클래스 줬다 뺐다 하면서 처리하자
    const iconBack = document.createElement("div");
    iconBack.classList.add("iconBack");
    //icon
    const playBtn = document.createElement("i");
    playBtn.classList.add("fa-solid", "fa-play");
    //icon
    const heartBtn = document.createElement("i");
    heartBtn.classList.add("fa-solid", "fa-heart");
    //7 곡 정보
    const infoWrap = document.createElement("div");
    infoWrap.classList.add("infoWrap");
    //8 제목,가수,앨범
    const music_Singer_Album = document.createElement("div");
    music_Singer_Album.classList.add("music_Singer_Album");
    //9 앨범 이름
    const albumName = document.createElement("span");
    albumName.classList.add("albumName");
    albumName.textContent = targetData[0].album;
    //10 가수 이름
    const singerName = document.createElement("span");
    singerName.classList.add("singerName");
    singerName.textContent = targetData[0].singer;
    //11 곡 이름
    const songName = document.createElement("p");
    songName.classList.add("songName");
    songName.textContent = targetData[0].song;
    //12 하트아이콘랩
    const heartIcon = document.createElement("div");
    heartIcon.classList.add("heartIcon");

    cardmodal.append(cardWrap);
    cardWrap.append(rankNum);
    cardWrap.append(imgWrap);
    imgWrap.append(albumWrap);
    albumWrap.append(albumImg);
    imgWrap.append(iconBack);
    iconBack.append(playBtn);
    cardWrap.append(infoWrap);
    infoWrap.append(music_Singer_Album);
    music_Singer_Album.append(albumName);
    music_Singer_Album.append(singerName);
    music_Singer_Album.append(songName);
    infoWrap.append(heartIcon);
    heartIcon.append(heartBtn);
  });
}

for (let i = 0; i < rank.length; i++) {
  rank[i].addEventListener("click", function (e) {
    console.log(e.target);
  });
}

//대문자 객체 데이터를 만들어주는 함수
const arr = [];
for (let i = 0; i < data.length; i++) {
  const obj = {
    singer: data[i].singer.toUpperCase(),
    song: data[i].song.toUpperCase(),
    id: data[i].id,
  };
  arr.push(obj);
}

const input2 = document.querySelector(".searchInput");
const music = document.querySelector(".music");
const singer = document.querySelector(".singer");
const musicNoResult = document.querySelector(".musicNoResult");
const singerNoResult = document.querySelector(".singerNoResult");

input2.addEventListener("keyup", function (e) {
  //인풋에 들어온 값을 대문자로 변환 해주는 함수
  const upValue = input2.value.toUpperCase();
  //대소문자 구분없는 데이터
  const upSearchData = arr.filter((el) => el.song.search(upValue) !== -1);
  const idArr = [];

  upSearchData.forEach((el) => {
    idArr.push(el.id);
  });

  let searchData = [];
  for (let i = 0; i < song_data.length; i++) {
    for (let j = 0; j < idArr.length; j++) {
      if (song_data[i].id == idArr[j]) {
        searchData.push(song_data[i]);
      }
    }
  }

  if (searchData.length === 0) music.innerHTML = "제목 검색 결과가 없습니다.";

  // for 문의 if 문
  for (let i = 0; i < searchData.length; i++) {
    if (i === 0) music.innerHTML = "";
    //1
    const musicResultWrap = document.createElement("div");
    musicResultWrap.classList.add("musicResultWrap");
    musicResultWrap.setAttribute("id", searchData[i].id);
    //2
    const resultAlbumCover = document.createElement("div");
    resultAlbumCover.classList.add("resultAlbumCover");
    //3
    const resultAlbumImg = document.createElement("img");
    resultAlbumImg.classList.add("resultAlbumImg");
    resultAlbumImg.setAttribute("src", searchData[i].albumCover);
    resultAlbumCover.append(resultAlbumImg);
    //4
    const resultMusicName = document.createElement("p");
    resultMusicName.classList.add("resultMusicName");
    resultMusicName.textContent = searchData[i].song;
    //5
    const resultArtistName = document.createElement("p");
    resultArtistName.classList.add("resultArtistName");
    resultArtistName.textContent = searchData[i].singer;

    musicResultWrap.append(resultAlbumCover);
    musicResultWrap.append(resultMusicName);
    musicResultWrap.append(resultArtistName);

    //모달

    searchResult.addEventListener("click", function () {
      cardmodal.style.display = "flex";
      // searchResult.classList.remove("show");
    });
    music.append(musicResultWrap);
  }
});

// window.addEventListener("click", (e) => {
//   console.log("!!!!", e.target);
// });

input2.addEventListener("keyup", function (e) {
  if (e.target.value.length === 0) {
    music.classList.add("hide");
  } else {
    music.classList.remove("hide");
  }
});
input2.addEventListener("keyup", function (e) {
  if (e.target.value.length > 0) {
    for (let i = 0; i < rank.length; i++) {
      rank[i].classList.add("hide");
    }
  } else {
    for (let i = 0; i < rank.length; i++) {
      rank[i].classList.remove("hide");
    }
  }
});

input2.addEventListener("keyup", function (e) {
  const upValue = input2.value.toUpperCase();
  //대소문자 구분없는 데이터
  const upSearchData = arr.filter((el) => el.singer.search(upValue) !== -1);
  const idArr = [];
  upSearchData.forEach((el) => {
    idArr.push(el.id);
  });

  const searchData = [];
  for (let i = 0; i < song_data.length; i++) {
    for (let j = 0; j < idArr.length; j++) {
      if (song_data[i].id == idArr[j]) {
        searchData.push(song_data[i]);
      }
    }
  }

  if (searchData.length === 0) singer.innerHTML = "가수 검색 결과가 없습니다.";

  // for 문의 if 문
  for (let i = 0; i < searchData.length; i++) {
    if (i === 0) singer.innerHTML = "";
    //1
    const singerResultWrap = document.createElement("div");
    singerResultWrap.classList.add("singerResultWrap");
    singerResultWrap.setAttribute("id", searchData[i].id);
    //2
    const resultSingerAlbumCover = document.createElement("div");
    resultSingerAlbumCover.classList.add("resultSingerAlbumCover");
    //3
    const resultSingerAlbumImg = document.createElement("img");
    resultSingerAlbumImg.classList.add("resultSingerAlbumImg");
    resultSingerAlbumImg.setAttribute("src", searchData[i].albumCover);
    resultSingerAlbumCover.append(resultSingerAlbumImg);
    //4
    const resultSingerMusicName = document.createElement("p");
    resultSingerMusicName.classList.add("resultSingerMusicName");
    resultSingerMusicName.textContent = searchData[i].song;
    //5
    const resultSingerArtistName = document.createElement("p");
    resultSingerArtistName.classList.add("resultSingerArtistName");
    resultSingerArtistName.textContent = searchData[i].singer;

    singerResultWrap.append(resultSingerAlbumCover);
    singerResultWrap.append(resultSingerMusicName);
    singerResultWrap.append(resultSingerArtistName);
    singer.append(singerResultWrap);
  }
  // if (searchData.length === 0) artistResultWrap.innerHTML = "";

  if (input2.value === "") {
    music.innerHTML = "";
    singer.innerHTML = "";
  }
});
//인풋창에 포커스가 되면 숨겨져 있던 검색창에 show 클래스를 줘서 1~5위까지 기본 결과가 나타남

input2.addEventListener("focus", function () {
  searchResult.classList.add("show");
  isInputDisply = true;
});
// music.addEventListener("click", function () {
//   searchResult.classList.add("show");
// });

// input2.addEventListener("blur", function () {
//   searchResult.classList.remove("show");
// });

mainHeader?.addEventListener("click", function () {
  searchResult.classList.remove("show");
});
mainFooter?.addEventListener("click", function () {
  searchResult.classList.remove("show");
});

//모달창 이외에 부분을 클릭하면 모달창 사라지게 함

cardmodal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("cardmodal")) {
    cardmodal.style.display = "none";
    cardmodal.innerHTML = "";
  }
});

//esc 키 누르면 모달 창 없어짐
window.addEventListener("keyup", (e) => {
  if (cardmodal.style.display === "flex" && e.key === "Escape") {
    cardmodal.style.display = "none";
    cardmodal.innerHTML = "";
  }
});
