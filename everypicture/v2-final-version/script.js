(function(){
  'use strict';
  console.log('reading js')


  //making the pause/play button
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

  // makes hovering over image pause the carousel (not working correctly)
  const trackhover = document.querySelector('#carouselTrack');

  document.querySelector('.carousel').addEventListener('mouseover', function(){
    console.log('hovering');
    document.querySelector('#carouselTrack').removeAttribute('style');
    /* alert('hover');
    if (isPlaying) {
      track.style.animationPlayState = "paused";
    } else {
      track.style.animationPlayState = "running";
    }

    isPlaying = !isPlaying; */
  });

})();