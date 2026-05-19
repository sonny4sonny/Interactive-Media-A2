const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const volumeSlider = document.querySelector("#volume-slider");
const muteImg = document.querySelector("#mute-img");
const fullscreenBtn = document.querySelector("#fullscreen-btn");

// reference to progress bar for scrubbing
const progressBarContainer = document.querySelector(".progress-bar");
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here 

// wooooooo finally got this mf, this is the added functionality to scrub through the video 
// had to use progressBarContainer not progressBar turns out progressBar is just the full width so it 
// was skipping straight to the end when you used it
// did this because people want the freedom to navigate through music videos at their own pace
progressBarContainer.addEventListener("click", function(event){
video.currentTime = (event.offsetX / progressBarContainer.offsetWidth) * video.duration;
});

volumeSlider.addEventListener("input", function(event){
video.volume = volumeSlider.value
});

// copied the playpause function and changed variables and images to become a mute button
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteImg.src = "https://img.icons8.com/?size=100&id=91635&format=png&color=000000 ";
  } else {
    video.muted = true;
    muteImg.src = "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}