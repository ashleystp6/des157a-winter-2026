(function(){
    'use strict';
    console.log('reading js')

    // document.addEventListener('click', function(event){
    //     // pauses the slider
    //     if( event.target.id == 'pause'){
    //         event.target.src = 'images/rectangle.png';
    //         //document.querySelector('.animate').style.animationPlayState = 'paused';
    //         currentLeft = slider.getBoundingClientRect().left;
    //         root.style.setProperty('--currentleft', currentLeft+'px');
    //         root.style.setProperty('--newleft', currentLeft-50+'px');
    //         slider.className = 'pause';
    //     }

    //     // resumes and continues the slider from where it's current position
    //     else if( event.target.id == 'pause'){
    //         event.target.src = 'images/rectangle.png';
    //         //document.querySelector('.animate').style.animationPlayState = 'running';
    //         currentLeft = slider.getBoundingClientRect().left;
    //         root.style.setProperty('--currentleft', currentLeft+'px');
    //         root.style.setProperty('--newleft', currentLeft-50+'px');
    //         slider.className = 'resume';
            
    //     slider.addEventListener('animationend', function(){
    //             currentLeft = slider.getBoundingClientRect().left;
    //             /* This if statement keeps the slider from sinching off
    //             the left side of the page, if the pause/start button is pressed
    //             multiple times. */
    //             if((currentLeft*-1) > sliderWidth){
    //                 currentLeft = currentLeft+sliderWidth;
    //             }
    //             root.style.setProperty('--currentleft', currentLeft+'px');
    //             root.style.setProperty('--newend', currentLeft-sliderWidth+'px');
    //             slider.className = 'continue';
    //             // once : true is used to remove the event listener after it has run one time
    //         }, {once : true});
    //     }
    // });

    // const pause = document.querySelector('images/rectangle.png');
    // pause.addEventListener('click', function(event){
    //     if (event.target.id == 'pause'){
    //         //pause carousel
    //     }
    //     else (){
    //         //restart carousel
    //     }
    // });

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