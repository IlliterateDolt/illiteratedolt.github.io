$(document).ready(function(){
  $(".header-menu").click(function(){
    $( "#menu-open" ).show("slide", { direction: "left" }, 1000);
    console.log('The Button was Clicked');
   //debug alert("The button was clicked.");
  });
});
