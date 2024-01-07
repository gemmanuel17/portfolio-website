let slideIndex = 1;
let startX, startY, endX, endY;
let slideInterval;

showSlides(slideIndex);

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  handleSwipe();
});

// Start automatic slideshow
slideInterval = setInterval(() => {
  plusSlides(1);
}, 4000);

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlides(slideIndex += n);
  // Start a new interval after navigating to the next/previous slide
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000);
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlides(slideIndex = n);
  // Start a new interval after navigating to a specific slide
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000);
}

function handleSwipe() {
  const deltaX = startX - endX;
  const deltaY = startY - endY;

  // Adjust the values as needed based on the desired sensitivity
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    // Horizontal swipe detected
    if (deltaX > 0) {
      plusSlides(1); // Swipe left
    } else {
      plusSlides(-1); // Swipe right
    }
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1; } 
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
