let allMusic = [
  {
    name: "Hype boy",
    artist: "NewJeans",
    img: "art1",
    audio: "name1",
    mp4: "video1",
  },
  {
    name: "D (half moon) (Feat. 개코)",
    artist: "DEAN",
    img: "art2",
    audio: "name2",
    mp4: "video2",
  },
  {
    name: "Candy",
    artist: "NCT DREAM",
    img: "art3",
    audio: "name3",
    mp4: "video3",
  },
  {
    name: "METEOR",
    artist: "창모 (CHANGMO)",
    img: "art4",
    audio: "name4",
    mp4: "video4",
  },
  {
    name: "첫 사랑니",
    artist: "f(x)",
    img: "art5",
    audio: "name5",
    mp4: "video5",
  },
  {
    name: "ROAR",
    artist: "더보이즈 (THE BOYZ)",
    img: "art6",
    audio: "name6",
    mp4: "video6",
  },
  {
    name: "Feel My Rhythm",
    artist: "Red Velvet (레드벨벳)",
    img: "art7",
    audio: "name7",
    mp4: "video7",
  },
  {
    name: "스물셋",
    artist: "아이유",
    img: "art8",
    audio: "name8",
    mp4: "video8",
  },
  {
    name: "BUMP BUMP",
    artist: "WOODZ",
    img: "art9",
    audio: "name9",
    mp4: "video9",
  },
  {
    name: "Justin Bieber (Feat. 박재범)",
    artist: "쿠기 (Coogie)",
    img: "art10",
    audio: "name10",
    mp4: "video10",
  },
  {
    name: "너에게 가는길 (슬램덩크)",
    artist: "박상민",
    img: "art11",
    audio: "name11",
    mp4: "video11",
  },
];

const musicWrap = document.querySelector(".wrap__music");
const musicImg = musicWrap.querySelector(".music__img img");
const musicName_smy = musicWrap.querySelector(".music__song .name");
const musicArtist = musicWrap.querySelector(".music__song .artist");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".music__progress");
const musicProgressBar = musicProgress.querySelector(".bar");
const musicProgressCurrent = musicProgress.querySelector(".current");
const musicProgressDuration = musicProgress.querySelector(".duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");
const musicList = document.querySelector(".music__list");
const musicListUl = musicList.querySelector(".list ul");
const MusicListBtn = musicWrap.querySelector("#control-list");
const lp = document.querySelector("figure section article .inner .lp");
const turntable = document.querySelector(
  "figure section article .inner .turntable"
);
const bgVideoUl = document.querySelector(".bg_video ul");
const bgVideoLi = document.querySelectorAll(".bg_video ul li");
let musicIndex = 1;

// 음악 재생
function loadMusic(num) {
  musicName_smy.innerText = allMusic[num - 1].name;
  musicArtist.innerText = allMusic[num - 1].artist;
  musicAudio.src = `../playlist/songs/${allMusic[num - 1].audio}.mp3`;
}

// 플레이 버튼
function playMusic() {
  musicWrap.classList.add("paused");
  musicPlay.innerText = "pause";
  musicPlay.setAttribute("title", "일시정지");
  musicAudio.play();
}

// 일시정지 버튼
function pauseMusic() {
  musicWrap.classList.remove("paused");
  musicPlay.innerText = "play_arrow";
  musicPlay.setAttribute("title", "재생");
  musicAudio.pause();
}

// 재생/일시정지
musicPlay.addEventListener("click", () => {
  const isMusicPaused = musicWrap.classList.contains("paused");
  isMusicPaused ? pauseMusic() : playMusic();

  if (!lp.classList.contains("lp-on")) {
    lp.classList.remove("lp-off");
    lp.classList.add("lp-on");
  } else {
    lp.classList.remove("lp-on");
    lp.classList.add("lp-off");
  }

  if (!turntable.classList.contains("turntable-on")) {
    turntable.classList.remove("turntable-off");
    turntable.classList.add("turntable-on");
  } else {
    turntable.classList.remove("turntable-on");
    turntable.classList.add("turntable-off");
  }
});

// 이전 곡 듣기 버튼
let num = 0;
let active = 0;

function prevMusic() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  // console.log(musicIndex);
  lp.classList.remove("lp-off");
  lp.classList.add("lp-on");
  playMusic();
  playListMusic();

  const innerArt = document.querySelector("figure section article .inner");
  const albumArtNum = innerArt.querySelectorAll("ul>li");
  albumArtNum[0].classList.add("album_on");

  for (let i = 1; i <= allMusic.length; i++) {
    albumArtNum[musicIndex - 1].classList.add("album_on");
    if (i - 1 !== musicIndex - 1) {
      albumArtNum[i - 1].classList.remove("album_on");
    }
  }

  bgVideoLi[0].classList.add("video_on");
  for (let i = 1; i <= allMusic.length; i++) {
    bgVideoLi[musicIndex - 1].classList.add("video_on");
    if (i - 1 !== musicIndex - 1) {
      bgVideoLi[i - 1].classList.remove("video_on");
    }
  }
}

// 다음 곡 듣기 버튼
function nextMusic() {
  musicIndex++;
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
  lp.classList.remove("lp-off");
  lp.classList.add("lp-on");
  playListMusic();

  const innerArt = document.querySelector("figure section article .inner");
  const albumArtNum = innerArt.querySelectorAll("ul>li");
  albumArtNum[0].classList.add("album_on");

  for (let i = 1; i <= allMusic.length; i++) {
    albumArtNum[musicIndex - 1].classList.add("album_on");
    if (i - 1 !== musicIndex - 1) {
      albumArtNum[i - 1].classList.remove("album_on");
    }
  }

  bgVideoLi[0].classList.add("video_on");
  for (let i = 1; i <= allMusic.length; i++) {
    bgVideoLi[musicIndex - 1].classList.add("video_on");
    if (i - 1 !== musicIndex - 1) {
      bgVideoLi[i - 1].classList.remove("video_on");
    }
  }
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;

  musicProgressBar.style.width = `${progressWidth}%`;

  musicAudio.addEventListener("loadeddata", () => {
    let audioDuration = musicAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) totalSec = `0${totalSec}`;

    musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) currentSec = `0${currentSec}`;

  musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

//앨범아트 이미지 넣기
const musicAlbumUl = document.querySelector(".inner ul");
const musicAlbumLi = document.querySelector(".inner ul li");
for (let k = 0; k < allMusic.length; k++) {
  let art_li = `
    <li data-index="${k + 1}">
        <div>
            <img src="../playlist/img/${
              allMusic[k].img
            }.jpg" alt="album_art" class="${allMusic[k].img}">
        </div>
    </li>
    `;
  musicAlbumUl.insertAdjacentHTML("beforeend", art_li);
}

// 진행 버튼
musicProgress.addEventListener("click", (e) => {
  let progressWidth = musicProgress.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = musicAudio.duration;
  musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic();
});

//전
musicPrevBtn.addEventListener("click", function () {
  prevMusic();
  MusicListBtn.classList.remove("fa-solid");
  MusicListBtn.classList.add("fa-regular");
});

//후
musicNextBtn.addEventListener("click", () => {
  nextMusic();

  MusicListBtn.classList.remove("fa-solid");
  MusicListBtn.classList.add("fa-regular");
});

// 반복 버튼
musicRepeat.addEventListener("click", () => {
  let getText = musicRepeat.innerText;

  switch (getText) {
    case "repeat":
      musicRepeat.innerText = "repeat_one";
      musicRepeat.setAttribute("title", "한곡 반복");
      break;

    case "repeat_one":
      musicRepeat.innerText = "shuffle";
      musicRepeat.setAttribute("title", "랜덤 반복");
      break;

    case "shuffle":
      musicRepeat.innerText = "repeat";
      musicRepeat.setAttribute("title", "전체 반복");
      playListMusic();
      break;
  }
});

// 오디오가 끝나고
musicAudio.addEventListener("ended", () => {
  let getText = musicRepeat.innerText;

  switch (getText) {
    case "repeat":
      nextMusic();
      break;

    case "repeat_one":
      loadMusic(musicIndex);
      playMusic();
      break;

    case "shuffle":
      let randIndex = Math.floor(Math.random() * allMusic.length + 1);
      do {
        randIndex = Math.floor(Math.random() * allMusic.length + 1);
      } while (musicIndex == randIndex);
      musicIndex = randIndex;
      loadMusic(musicIndex);
      playMusic();
      break;
  }
});

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
  let li = `<li data-index="${i + 1}" class="songNum${i}">
            <div>
                <em>${allMusic[i].name}</em>
                <p>${allMusic[i].artist}</p>
            </div>
            <audio class="${allMusic[i].audio}" src="../playlist/songs/${
    allMusic[i].audio
  }.mp3"></audio>
            <span id="${allMusic[i].audio}" class="audio-duration">3:36</span>
        </li>`;

  musicListUl.insertAdjacentHTML("beforeend", li);

  let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`);
  let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);

  liAudio.addEventListener("loadeddata", () => {
    let audioDuration = liAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) totalSec = `0${totalSec}`;

    liAudioDuration.innerText = `${totalMin}:${totalSec}`;
    liAudioDuration.setAttribute("data-duration", `${totalMin}:${totalSec}`);
  });
}

// 뮤직 리스트 클릭하기
const musicListAll = musicListUl.querySelectorAll("li");

function playListMusic() {
  for (let j = 0; j < musicListAll.length; j++) {
    let audioTag = musicListAll[j].querySelector(".audio-duration");
    let adDuration = audioTag.getAttribute("data-duration");

    if (musicListAll[j].classList.contains("playing")) {
      musicListAll[j].classList.remove("playing");
      audioTag.innerText = adDuration;
    }

    if (musicListAll[j].getAttribute("data-index") == musicIndex) {
      musicListAll[j].classList.add("playing");
      audioTag.innerText = "재생중";
    }
    musicListAll[j].setAttribute("onclick", "clicked(this)");
  }
  if (!turntable.classList.contains("turntable-on")) {
    turntable.classList.remove("turntable-off");
    turntable.classList.add("turntable-on");
  }
}

function clicked(el) {
  let getLiIndex = el.getAttribute("data-index");

  lp.classList.remove("lp-off");
  lp.classList.add("lp-on");

  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playListMusic();

  const innerArt = document.querySelector("figure section article .inner");
  const albumArtNum = innerArt.querySelectorAll("ul>li");

  albumArtNum[0].classList.add("album_on");

  for (let i = 1; i <= allMusic.length; i++) {
    albumArtNum[getLiIndex - 1].classList.add("album_on");
    if (i - 1 !== getLiIndex - 1) {
      albumArtNum[i - 1].classList.remove("album_on");
    }
  }

  bgVideoLi[0].classList.add("video_on");

  for (let i = 1; i <= allMusic.length; i++) {
    bgVideoLi[musicIndex - 1].classList.add("video_on");
    if (i - 1 !== musicIndex - 1) {
      bgVideoLi[i - 1].classList.remove("video_on");
    }
  }
}

// 창이 열리면 노래 시작
window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playListMusic();

  if (turntable.classList.contains("turntable-on")) {
    turntable.classList.remove("turntable-on");
    turntable.classList.add("turntable-off");
  }

  const innerArt = document.querySelector("figure section article .inner");
  const albumArtNum = innerArt.querySelectorAll("ul>li");
  albumArtNum[0].classList.add("album_on");

  for (let i = 1; i <= allMusic.length; i++) {
    albumArtNum[musicIndex - 1].classList.add("album_on");
    if (i - 1 !== musicIndex - 1) {
      albumArtNum[i - 1].classList.remove("album_on");
    }
  }
});

//:purple_heart:
MusicListBtn.addEventListener("click", function () {
  if (MusicListBtn.classList.contains("fa-regular")) {
    MusicListBtn.classList.remove("fa-regular");
    MusicListBtn.classList.add("fa-solid");
    MusicListBtn.classList.add("fa-heart");
  } else {
    MusicListBtn.classList.remove("fa-solid");
    MusicListBtn.classList.add("fa-regular");
    MusicListBtn.classList.add("fa-heart");
  }
});
