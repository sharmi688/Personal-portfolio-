// Toggle Navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect
const roles = ["Web Developer", "Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];
  let displayText = currentRole.substring(0, j);
  document.getElementById("typing").textContent = displayText;

  if (!isDeleting && j < currentRole.length) {
    j++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % roles.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();
