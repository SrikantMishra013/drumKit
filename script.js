window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
  const key = document.querySelector(`.btn[key-data="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 70);
});
