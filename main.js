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
var sticky = 50;

function addStickyClass() {
   if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}

window.addEventListener('scroll', addStickyClass);


//review page scrolling carousel:


const reviewsContainer = document.querySelector('.review-container');
const reviewItems = reviewsContainer.getElementsByClassName('review');

let currentIndex = 0;
let nextIndex = 1;

// Initial setup for the first review item
reviewItems[currentIndex].style.opacity = 1; // set opacity to 1 for the center review item
reviewItems[currentIndex].style.transform = 'scale(1)'; // set size to 1 for the center review item

// Function to update the reviews carousel
function updateReviewsCarousel() {
  var i;
  for(i = nextIndex; i<reviewItems.length + nextIndex ; i++)
  {
    reviewItems[i].style.transform = 'translate(-100%,0%)';
  
  // Fade out the current review item
  reviewItems[currentIndex].style.opacity = 0.5; // set opacity to 0.5 for the current review item
  reviewItems[currentIndex].style.transform = 'scale(0.8)'; // set size to 0.8 for the current review item

  // Fade in the next review item
  reviewItems[nextIndex].style.opacity = 1; // set opacity to 1 for the next review item
  reviewItems[nextIndex].style.transform = 'scale(1)'; // set size to 1 for the next review item
  // Update current and next index for the next iteration
  currentIndex = nextIndex;
  nextIndex = (currentIndex + 1) % reviewItems.length;

  // Repeat the updateReviewsCarousel function every 10 seconds
  setTimeout(updateReviewsCarousel, 2000);
  }
}

// Call the function to start the reviews carousel
updateReviewsCarousel();