const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode'); // Add 'dark-mode' class to enable dark mode
  } else {
    body.classList.remove('dark-mode'); // Remove 'dark-mode' class to disable dark mode
  }
});
// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
  const parallaxItems = document.querySelectorAll(".parallax-item");

  function checkScroll() {
    parallaxItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < window.innerHeight * 0.8) {
        item.classList.add("in-viewport");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check initially
});


            // Get all elements with the "image" class
           const images = document.querySelectorAll('.image');

            // Function to toggle full-screen mode for an element
            function toggleFullScreen(element) {
                if (!document.fullscreenElement) {
                    element.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                    });
                } else {
                    document.exitFullscreen();
                }

                // Toggle a class to change background color and cursor
                element.classList.toggle('full-screen');
            }

            // Add a click event listener to each image
            images.forEach(image => {
                image.addEventListener('click', () => {
                    toggleFullScreen(image);
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