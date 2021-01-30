$(document).ready(function(){
  $(".header-menu").click(function(){
    $( "#menu-open" ).slideToggle(300);
    console.log('The Button was Clicked');
   //debug alert("The button was clicked.");
  });
});

<!--GSAP Animation Scripts --> 
var $circle = $('.circle'),
    $follow = $('.circle-follow');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
      x: e.clientX,
      y: e.clientY
  });
  TweenLite.to($follow, 0.7, {
      x: e.clientX,
      y: e.clientY
  });  
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
      scale: 3
  });  
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
      scale: 1
  });  
}

$(window).on('mousemove', moveCircle);

$("a").hover(hoverFunc, unhoverFunc);
