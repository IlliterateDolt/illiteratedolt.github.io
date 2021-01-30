$(document).ready(function(){
  $(".header-menu").click(function(){
    $( "#menu-open" ).slideToggle( "slow" );
    console.log('The Button was Clicked');
   //debug alert("The button was clicked.");
  });
});
