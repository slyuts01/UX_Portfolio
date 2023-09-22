const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode'); // Add 'dark-mode' class to enable dark mode
  } else {
    body.classList.remove('dark-mode'); // Remove 'dark-mode' class to disable dark mode
  }
});

window.addEventListener('load', function() {
  var heroSection = document.querySelector('.hero-section');
  var heroHeading = document.querySelector('.hero-heading');
  var heroSubheading = document.querySelector('.hero-subheading');
  var buttonWrapper = document.querySelector('.button-wrapper');

  setTimeout(function() {
    heroSection.classList.add('show');
  }, 400);

  setTimeout(function() {
    heroHeading.classList.add('show');
  }, 500);

  setTimeout(function() {
    heroSubheading.classList.add('show');
  }, 1100);

  setTimeout(function() {
    buttonWrapper.classList.add('show');
  }, 1100);
});

const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollArrow = document.querySelector('.scroll-arrow');

scrollWrapper.addEventListener('mouseenter', () => {
  scrollArrow.classList.add('animate');
});

scrollWrapper.addEventListener('mouseleave', () => {
  scrollArrow.classList.remove('animate');
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollWrapper = document.querySelector('.scroll-wrapper');
  setTimeout(() => {
    scrollWrapper.classList.add('visible');
  }, 600);
});

// Add fade-in effect to sections on scroll
function fadeInSections() {
  var sections = document.querySelectorAll('.want-to-work, .right-side');
  
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - window.innerHeight + 200;
    
    if (window.scrollY > sectionTop) {
      section.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeInSections);
window.addEventListener('load', fadeInSections);

function scrollToSection(id) {
  const section = document.querySelector(id);;
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Add click event listeners to the navigation links
const aboutMeLink = document.querySelector('a[href="#What-I-Do-Section"]');
if (aboutMeLink) {
  aboutMeLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("#What-I-Do-Section");
  });
}

const getInTouchLink = document.querySelector('a[href="#contact-footer"]');
if (getInTouchLink) {
  getInTouchLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("#contact-footer");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");
  const fadeInSection = document.querySelectorAll(".fade-in-section");

  function checkScroll() {
    hiddenElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight / 1.2) {
        element.classList.add("reveal");
      } else {
        element.classList.remove("reveal");
      }
    });

    fadeInSection.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight / 1.2) {
        element.classList.add("show");
      }
    });
  }

  // Initial check when the page loads
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scrolling effect
function handleScroll() {
  const elementsToShow = document.querySelectorAll(".hidden");
  const whatIDoSection = document.querySelector("#What-I-Do-Section");
  const contactFooter = document.querySelector("#contact-footer");

  elementsToShow.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("show");
    }
  });

  if (isInViewport(whatIDoSection)) {
    whatIDoSection.classList.add("show");
  }

  if (isInViewport(contactFooter)) {
    contactFooter.classList.add("show");
  }
}

// Listen for the scroll event
window.addEventListener("scroll", handleScroll);

