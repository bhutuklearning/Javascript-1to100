const themeToggle = document.getElementById("themeToggle")
const htmlElement = document.documentElement

if (!themeToggle) {
    console.error("[v0] Theme toggle button not found!")
} else {
    console.log("[v0] Theme toggle button initialized successfully")

    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem("theme") || "dark"
    if (currentTheme === "light") {
        htmlElement.classList.add("light-theme")
        console.log("[v0] Light theme loaded from localStorage")
    } else {
        console.log("[v0] Dark theme loaded")
    }

    // Theme toggle event listener
    themeToggle.addEventListener("click", () => {
        htmlElement.classList.toggle("light-theme")

        // Save preference to localStorage
        const theme = htmlElement.classList.contains("light-theme") ? "light" : "dark"
        localStorage.setItem("theme", theme)

        //console.log("Theme switched to:", theme)
    })

    themeToggle.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            themeToggle.click()
        }
    })
}

// Ripple effect on click
document.querySelectorAll(".link-card").forEach((card) => {
    card.addEventListener("click", (e) => {
        const ripple = document.createElement("span")
        const rect = card.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")

        card.appendChild(ripple)

        setTimeout(() => ripple.remove(), 600)
    })
})

// Add ripple effect styles dynamically
const style = document.createElement("style")
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    }

    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Smooth scroll behavior is now handled by CSS

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

document.querySelectorAll(".link-card").forEach((card) => {
    observer.observe(card)
})

// The CSS hover effects now handle all visual feedback

// Prevent default link behavior for demo
document.querySelectorAll(".link-card, .social-icon").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const title = link.querySelector("h3")?.textContent || "Social link"
        console.log("[v0] Link clicked:", title)
    })
})

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
    const cards = Array.from(document.querySelectorAll(".link-card"))
    const currentFocus = document.activeElement
    const currentIndex = cards.indexOf(currentFocus)

    if (e.key === "ArrowDown" && currentIndex < cards.length - 1) {
        cards[currentIndex + 1].focus()
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
        cards[currentIndex - 1].focus()
    }
})

// Add focus styles for accessibility
document.querySelectorAll(".link-card, .social-icon").forEach((element) => {
    element.addEventListener("focus", function () {
        this.style.outline = "2px solid var(--primary)"
        this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
        this.style.outline = "none"
    })
})


document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('href');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });
});

document.querySelectorAll('.social-icon').forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('href');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });
});

document.querySelectorAll('.mini-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('href');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const projectCard = document.querySelector(".project-card");

    projectCard.addEventListener("click", (e) => {
        // Prevent clicks on individual mini-cards from toggling dropdown
        if (e.target.closest(".mini-card")) return;

        projectCard.classList.toggle("active");
    });
});


// document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const email = link.getAttribute('href').replace('mailto:', '');
//         // Try to open default email client
//         window.location.href = `mailto:${email}`;

//         // As backup, show an alert if mail client isn't configured
//         setTimeout(() => {
//             if (!document.hasFocus()) return; // mail client opened
//             alert("It seems your browser doesn't have a default email client configured.\nYou can email me at: " + email);
//         }, 500);
//     });
// });
