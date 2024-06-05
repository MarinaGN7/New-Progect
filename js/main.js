$(document).ready(function () {
   $('.client-inner').slick({
      dots: false,
      arrows: true,

   });
});



   

$(document).ready(function () {
   $('.menu-btn').click(function (event) {
      $('.menu-btn,.overlay-content').toggleClass('active')


   });

});

$(function () {

   const videoBtn = document.querySelector('#video-story-btn');
   const videoBtnIcon = document.querySelector('#video-story-btn-icon');
   const videoOverlay = document.querySelector('#video-story-overlay');
   const videoFile = document.querySelector('#video-story');

   videoBtn.addEventListener('click', function () {
      function toggleOverlay(event) {
         if (event.type === 'mouseLeave') {
            videoOverlay.classList.add('hidden');
         } else {
            videoOverlay.classList.remove('hidden');
         }
      }

      if (videoFile.paused) {
         videoFile.play();
         videoBtnIcon.src = 'image/pause.svg';

         videoOverlay.onmouseleave = toggleOverlay;
         videoOverlay.onmouseenter = toggleOverlay;

      } else {
         videoFile.pause();
         videoBtnIcon.src = 'image/play.svg';
         videoOverlay.onmouseleave = null;
         videoOverlay.onmouseenter = null;
      }
   });

});
