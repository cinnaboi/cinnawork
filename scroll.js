$(document).ready(function(){
  $("header nav ul li a").on("click", function(){
    var c = this.hash;
    var h = $(c);
    
    $(".scrollTo").each(function(){
      if (c == $(this).attr("href")) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
    });
    
    $("body, html").animate({
      "scrollTop" : $(h).offset().top
    });
  });        
});