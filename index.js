// Stop all other videos when one is playing
function videoOnPlay(event) {
  const videos = document.querySelectorAll('video:not([autoplay])');
  for (let i = 0; i < videos.length; i++) {
    if (videos[i] !== event.target) {
      videos[i].pause();
      videos[i].currentTime = 0;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video:not([autoplay])');
  videos.forEach((video) => {
    video.addEventListener('play', videoOnPlay);
  });
});
