  
// Typewriter effect
  
  document.addEventListener("DOMContentLoaded", function() {
    // const darkModeToggle = document.getElementById('dark-mode-toggle');
    // darkModeToggle.addEventListener('click', function() {
    //     document.body.classList.toggle('dark-mode');
    // });

    
    const textArray = ["Software Engineer", "Web Developer", "Tech Enthusiast"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const typewriterElement = document.getElementById("typewriter");

    function type() {
      const fullText = textArray[currentIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      typewriterElement.textContent = currentText;

      let typeSpeed = 200;
      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  });

