$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.tooltipped').tooltip();
  $('.video-hover').on('mouseover',function(){
    $(this).slideUp(500);
  });
  $('.card-image-processing').on('mouseleave',function(){
    $('.video-hover').slideDown(1000);
  });
  
});
  //js here
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  