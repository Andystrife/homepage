const lofigirl = document.querySelector(".lofigirl");

const betterMood = document.querySelector(".betterMood");

const soothingBreeze = document.querySelector(".soothingBreeze");

const floatingCity = document.querySelector(".floatingCity");

const player = document.querySelector(".player");

const lofigirlSong = () => {
  player.innerHTML =
    "<iframe width='560' height='315' src='https://www.youtube.com/embed/n61ULEU7CO0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
};

const betterMoodSong = () => {
  player.innerHTML =
    "<iframe width='560' height='315' src='https://www.youtube.com/embed/j0GVq-ghtWw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
};

const soothingBreezeSong = () => {
  player.innerHTML =
    "<iframe width='560' height='315' src='https://www.youtube.com/embed/gnZImHvA0ME' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
};

const floatingCitySong = () => {
  player.innerHTML =
    "<iframe width='560' height='315' src='https://www.youtube.com/embed/1oahTaVIQvk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
};

document.addEventListener("DOMContentLoaded", () => {
  lofigirl.addEventListener("click", lofigirlSong);
  betterMood.addEventListener("click", betterMoodSong);
  soothingBreeze.addEventListener("click", soothingBreezeSong);
  floatingCity.addEventListener("click", floatingCitySong);
});
