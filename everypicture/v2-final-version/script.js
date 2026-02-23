(function(){
  'use strict';
  console.log('reading js')

  const track = document.getElementById("carouselTrack");
  const button = document.getElementById("toggleBtn");

  let isPlaying = true;

  button.addEventListener("click", function(){
    if (isPlaying) {
      track.style.animationPlayState = "paused";
      button.textContent = "Play";
    } else {
      track.style.animationPlayState = "running";
      button.textContent = "Pause";
    }

    isPlaying = !isPlaying;
  });

  const trackhover = document.querySelector('#carouselTrack');

  trackhover.addEventListener('hover', function(){
    alert('hover');
    if (isPlaying) {
      track.style.animationPlayState = "paused";
    } else {
      track.style.animationPlayState = "running";
    }

    isPlaying = !isPlaying;
  });

})();