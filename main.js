//homepage slideshow:

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let lines = document.querySelectorAll(".line");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < lines.length; i++) {
    lines[i].className = lines[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  lines[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}


//navbar appearance:

var navbar = document.querySelector('.navbar');
var get = document.querySelector('.order-btn');
var sticky = 120;

function addStickyClass() {
   if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}

window.addEventListener('scroll', addStickyClass);

