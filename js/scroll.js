// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
//     });

$(document).ready(function(){

    var scrollLink = $('.scroll');
  
    // Smooth Scrolling
    scrollLink.click(function(e){
      e.preventDefault();
        $('body, html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 )
    })
  
  
  })
    

