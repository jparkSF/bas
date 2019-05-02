$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    
    const $target = $(this);
    
    $('html, body').animate({
      'scrollTop': 0
    },1000, 'swing');
  })
})