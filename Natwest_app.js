document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle functionality
  const themeToggle = document.getElementById('theme-toggle-checkbox');
  const body = document.body;

  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

  // Image Carousel functionality
  const images = document.querySelectorAll('.image-slider img');
  let currentImage = 0;

  function showImage(n) {
    images.forEach(img => img.classList.remove('active'));
    images[n].classList.add('active');
  }

  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
  }

  // Change image every 3 seconds (adjust the time as needed)
  setInterval(nextImage, 4000);

 
});

  const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Check if the image already has the 'expanded' class
        const isExpanded = image.classList.contains('expanded');
        
        // Toggle the 'expanded' class
        image.classList.toggle('expanded', !isExpanded);
    });
});

const scrollToTopButton = document.querySelector('.scroll-to-top-button');

function fadeInScrollToTopButton() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Show the scroll-to-top button when user has scrolled past half of the window height
  if (scrollPosition > windowHeight / 2) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
}

// Scroll to top function
function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

// Add event listener for scroll to update scroll-to-top button visibility
document.addEventListener('scroll', fadeInScrollToTopButton);

// Trigger the scroll event on page load to update visibility initially
document.addEventListener('DOMContentLoaded', () => {
  fadeInScrollToTopButton();
});

function scrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
// Function to add 'fade-in' class to elements in the viewport
function fadeInElements(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(fadeInElements, {
  root: null, // Use the viewport as the root
  threshold: 0.2, // Trigger the effect when 20% of the element is visible
  rootMargin: '0px', // No additional margin
});

// Select the elements you want to apply the effect to and observe them
const containers = document.querySelectorAll('.container, .additional-container');
containers.forEach((container) => {
  observer.observe(container);
});
  