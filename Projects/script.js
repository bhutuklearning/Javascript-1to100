// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = document.querySelector(".theme-icon");

function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-theme");
    themeIcon.textContent = "☀️";
  } else {
    body.classList.remove("light-theme");
    themeIcon.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-theme");
  setTheme(isLight ? "light" : "dark");
});

// Navbar link active state and smooth scroll
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
    // Close menu on mobile after click
    navbarCenter.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// Carousel (Home Section)
const carouselTrack = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
let currentSlide = 0;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

let carouselInterval = setInterval(nextSlide, 2500);

// Pause on hover
carouselTrack.addEventListener("mouseenter", () =>
  clearInterval(carouselInterval)
);
carouselTrack.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(nextSlide, 2500);
});

// Responsive fix for carousel
window.addEventListener("resize", () => showSlide(currentSlide));

// Initial display
showSlide(currentSlide);

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navbarCenter = document.querySelector(".navbar-center");

function toggleMenu() {
  navbarCenter.classList.toggle("open");
  hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// --- Scroll-based Animations ---
const animatedEls = document.querySelectorAll(
  ".animate-zoom, .animate-fade, .animate-slide-up, .animate-slide-left, .animate-slide-right"
);

const observer = new window.IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

animatedEls.forEach((el) => observer.observe(el));

// --- Staggered Appear Animations ---
const staggerEls = Array.from(document.querySelectorAll(".stagger-appear"));

function staggerInView(entries, observer) {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger delay based on element type
      let delay = 0;
      if (entry.target.classList.contains("home-texts")) delay = 700;
      else if (entry.target.classList.contains("about-card")) delay = 1200;
      else delay = idx * 120;
      setTimeout(() => entry.target.classList.add("in-view"), delay);
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}

const staggerObserver = new window.IntersectionObserver(staggerInView, {
  threshold: 0.18,
});

staggerEls.forEach((el) => staggerObserver.observe(el));

// Custom Cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 3D Tilt Effect for Project Cards (Removed or commented out)
/*
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
  });
});
*/

// Scroll Reveal Animation
const scrollReveal = () => {
  const elements = document.querySelectorAll(".scroll-reveal");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollReveal);

// Particle Effect
const createParticles = () => {
  const particles = document.createElement("div");
  particles.classList.add("particles");
  document.body.appendChild(particles);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5});
            border-radius: 50%;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
        `;
    particles.appendChild(particle);
  }
};

createParticles();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Add scroll-reveal class to elements
document
  .querySelectorAll(".project-card, .about-card, .contact-form")
  .forEach((element) => {
    element.classList.add("scroll-reveal");
  });

// Section Transitions
const sections = document.querySelectorAll(".hero-section");

function setActiveSection() {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.classList.add("active");
      const correspondingNavLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );
      if (correspondingNavLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        correspondingNavLink.classList.add("active");
      }
    } else {
      section.classList.remove("active");
    }
  });
}

// Project Cards Interaction
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  // Mouse enter effect
  card.addEventListener("mouseenter", () => {
    projectCards.forEach((c) => {
      if (c !== card) {
        c.style.opacity = "0.4";
        c.style.filter = "blur(2px)";
      }
    });
    card.classList.add("active");
  });

  // Mouse leave effect
  card.addEventListener("mouseleave", () => {
    projectCards.forEach((c) => {
      c.style.opacity = "1";
      c.style.filter = "none";
    });
    card.classList.remove("active");
  });

  // Click to expand
  card.addEventListener("click", () => {
    // Create overlay if it doesn't exist
    let overlay = document.querySelector(".overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "overlay";
      document.body.appendChild(overlay);
    }

    // Add expanded class to clicked card
    card.classList.add("expanded");
    overlay.classList.add("active");
    body.style.overflow = "hidden";

    // Hide other cards
    projectCards.forEach((c) => {
      if (c !== card) {
        c.classList.add("hidden");
      }
    });

    // Close expanded view when clicking overlay
    overlay.addEventListener("click", () => {
      card.classList.remove("expanded");
      overlay.classList.remove("active");
      body.style.overflow = "";

      // Show other cards again
      projectCards.forEach((c) => {
        c.classList.remove("hidden");
        c.style.opacity = "1";
        c.style.filter = "none";
      });
    });

    // Close expanded view with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && card.classList.contains("expanded")) {
        card.classList.remove("expanded");
        overlay.classList.remove("active");
        body.style.overflow = "";

        projectCards.forEach((c) => {
          c.classList.remove("hidden");
          c.style.opacity = "1";
          c.style.filter = "none";
        });
      }
    });
  });
});

// Scroll Event Listeners
window.addEventListener("scroll", () => {
  setActiveSection();
  scrollReveal();
});

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  setActiveSection();
  scrollReveal();
});

// --- Project Work Item Interaction ---
const workItems = document.querySelectorAll(".work-item");
const pageOverlay = document.createElement("div");
pageOverlay.classList.add("page-overlay");
document.body.appendChild(pageOverlay);

workItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("expanded")) {
      // Expand the clicked item
      item.classList.add("expanded");

      // Hide other items
      workItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("hidden");
        }
      });

      // Activate overlay and disable body scroll
      pageOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      // Collapse the item
      item.classList.remove("expanded");

      // Show other items
      workItems.forEach((otherItem) => {
        otherItem.classList.remove("hidden");
      });

      // Deactivate overlay and re-enable body scroll
      pageOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

// Close expanded item when clicking on the overlay
pageOverlay.addEventListener("click", () => {
  const expandedItem = document.querySelector(".work-item.expanded");
  if (expandedItem) {
    expandedItem.classList.remove("expanded");
    workItems.forEach((item) => item.classList.remove("hidden"));
    pageOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close expanded item with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const expandedItem = document.querySelector(".work-item.expanded");
    if (expandedItem) {
      expandedItem.classList.remove("expanded");
      workItems.forEach((item) => item.classList.remove("hidden"));
      pageOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
});
