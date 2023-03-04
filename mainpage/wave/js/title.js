let typeText = document.querySelector(".typeText");
let textToBeTyped = "SongHeeHo";
let textToBeTypedArr = [
  "SongHeeHo",
  "First Team Project",
  "Html,CSS,Javascript",
  "MusicPlayer",
];
let index = 0;
let isAdding = true;
let textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      // set the text of typeText to a substring of the text to be typed using index.
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        // adding text
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          // no more text to add
          isAdding = false;
          //break: wait 2s before playing again
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // increment index by 1
          index++;
        }
      } else {
        // removing text
        if (index === 0) {
          // no more text to remove
          isAdding = true;
          //switch to next text in text array
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          // decrement index by 1
          index--;
        }
      }
      // call itself
      playAnim();
    },
    isAdding ? 120 : 60
  );
}
// start animation

playAnim();
