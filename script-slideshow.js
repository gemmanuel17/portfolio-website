let slideIndex = 1;
let startX, startY, endX, endY;
let slideInterval;

showSlides(slideIndex);

const slideshowContainer = document.getElementById("slideshow-container");

slideshowContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval); // Pause slideshow on hover
});

slideshowContainer.addEventListener('mouseleave', () => {
  // Resume slideshow on mouse leave
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000);
});

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  clearInterval(slideInterval); // Pause slideshow on touch
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  handleSwipe();
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
