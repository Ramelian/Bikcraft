function fadeIn(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
}
  
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("[data-anime]");
  
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(fadeIn, { rootMargin: "-20% 0px" });
  
      elements.forEach(element => {
        observer.observe(element);
      });
    } else {
      elements.forEach(element => {
        element.classList.add("active");
      });
    }
});

function typeWriter(textElement, text, delay = 50) {
    let charIndex = 0;
    const maxIndex = text.length - 1;
    textElement.textContent = ''; // Clear the existing text
  
    function type() {
      textElement.textContent += text[charIndex];
      charIndex++;
  
      if (charIndex <= maxIndex) {
        setTimeout(type, delay);
      }
    }
  
    type();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const text = textElement.textContent.trim();
    const observerOptions = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          typeWriter(textElement, text, 25); // Set a lower delay value for faster typing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    observer.observe(textElement);
});

  
const bikeImages = document.querySelectorAll(".bike-img-switchable");
const imagesContainer = document.querySelector(".bikes-imgs");

function switchImage(event) {
  const clickedImage = event.currentTarget;
  const isDesktop = matchMedia("(min-width: 1000px)").matches;

  if (isDesktop) {
    imagesContainer.prepend(clickedImage);
  }
}

function addEventListeners(image) {
  image.addEventListener("click", switchImage);
}

bikeImages.forEach(addEventListeners);