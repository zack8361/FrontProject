const tbody = document.querySelector("tbody");
let tr_k;
let td_j;
let imgTag;
let divTag;

for (let k = 0; k < 100; k++) {
  tr_k = document.createElement("tr");
  tbody.appendChild(tr_k);

  for (let j = 0; j < 5; j++) {
    td_j = document.createElement("td");
    tr_k.appendChild(td_j);
    const td = document.querySelector("td");

    divTag = document.createElement("div");

    imgTag = document.createElement("img");
    //td_j.appendChild(divTag);
  }

  // 순위 숫자 넣기 1~100
  const td_first = tr_k.querySelector("tr>td:nth-child(5n + 1)");
  td_first.innerHTML = k + 1;

  // 노래 제목
  const td_second = tr_k.querySelector("tr>td:nth-child(5n + 2)");
  td_second.innerHTML = JSON.parse(JSON.stringify(song_data[k].song));

  // 가수
  const td_third = tr_k.querySelector("tr>td:nth-child(5n + 3)");
  td_third.innerHTML = JSON.parse(JSON.stringify(song_data[k].singer));

  // 앨범명
  const td_fourth = tr_k.querySelector("tr>td:nth-child(5n + 4)");
  td_fourth.innerHTML = JSON.parse(JSON.stringify(song_data[k].album));

  const td_fifth = tr_k.querySelector("tr>td:nth-child(5n + 5)");
  td_fifth.appendChild(imgTag);
  imgTag.setAttribute(
    "src",
    JSON.parse(JSON.stringify(song_data[k].albumCover))
  );
  //td_fifth.innerHTML = JSON.parse(JSON.stringify(song_data[k].albumCover));
}
