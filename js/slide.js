

//slide
var slideIndex = 1;
showSlides(slideIndex);
setInterval(() => {
    currentSlide(slideIndex === 6 ? 1 : slideIndex + 1)
}, 3000)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');

  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
    const $nav = $('#navtext');
    const $navtw = $(".hd__glnav__sub__twitter");
    if(n == 1 || n == 4 || n == 6) {
        $nav.css('color', '#fff');
        $navtw.css('color', '#fff');
        $navtw.css('background', "url('./img/common/icon_tw_white.png') left center no-repeat");


    }else{
        $nav.css('color','#3d3e3f');
        $navtw.css('color', '#3d3e3f');
        $navtw.css('background', "url('./img/common/icon_tw_black.png') left center no-repeat");

    }
}


