document.addEventListener('DOMContentLoaded', function() {
   'use strict';

   let circle = document.querySelector('.circle'),
       btn = document.querySelector('.btn'),
       w = circle.clientWidth,
       h = circle.clientHeight;

   btn.addEventListener('click', raiseCircle);

   function raiseCircle () {
       requestAnimationFrame(raiseCircle);
       if (w < 500 && h < 500) {
           circle.style.width = ++w + 'px';
           circle.style.height = ++h + 'px';
       }
   }
});